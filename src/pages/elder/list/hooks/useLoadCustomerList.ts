import { useRequest } from '@@/exports';
import { getCustomerListPad, getCustomerListWechat } from '@/api/customer';

const useLoadCustomerList = (containerRef) => {
  const { data, loading, run, loadMore } = useRequest((page = {
    currentPage: 0,
    pageSize: 2,
    total: 0,
  }, params) => {
    return getCustomerListPad({
      pageSize: 10,
      pageNumber: page.currentPage + 1,
      ...params,
    });
  }, {
    loadMore: true,
    ref: containerRef,
    isNoMore: (d) => (d ? d.currentPage >= d.totalPage : false),
    formatResult: (res) => {
      console.log('formatResult', res);
      return {
        list: res.data?.dataList,
        total: res.data?.totalNum,
        totalPage: res.data?.totalPage,
        currentPage: res.data?.currentPage,
        totalNum: res.data?.totalNum,
      };
    },
  });

  return {
    data,
    loading,
    run,
  };
};

export default useLoadCustomerList;