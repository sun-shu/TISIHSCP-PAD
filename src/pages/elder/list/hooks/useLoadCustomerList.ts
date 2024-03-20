import { useRequest } from '@@/exports';
import { getCustomerListWechat } from '@/api/customer';

const useLoadCustomerList = (containerRef) => {
  const { data, loading, run, loadMore } = useRequest((params) => {
    return getCustomerListWechat(params);
  }, {
    loadMore: false,
    ref: containerRef,
    isNoMore: (d) => false,
    formatResult: (res) => {
      console.log('formatResult', res);
      return {
        list: res.data,
      };
    },
    // isNoMore: (d) => (d ? d.list.length >= d.total : false),
  });

  return {
    data,
    loading,
    run,
  };
};

export default useLoadCustomerList;