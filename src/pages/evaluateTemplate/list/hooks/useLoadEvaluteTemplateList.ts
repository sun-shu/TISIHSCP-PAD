import { useRequest } from '@@/exports';
import { getTemplateMainSelect } from '@/api/evaluateTemplate';
import { useState } from 'react';

const useLoadEvaluteTemplateList = (locationParams, containerRef) => {
  const [searchKeywords, setSearchKeywords] = useState();

  const { data, run, loading } = useRequest((page = {
    currentPage: 0,
    pageSize: 2,
    total: 0,
  }, keywords = '') => {
    setSearchKeywords(keywords);
    return getTemplateMainSelect({
      customerId: locationParams.customerId,
      name: keywords,
      pageSize: 10,
      pageNumber: page.currentPage + 1,
    });
  }, {
    ready: !!locationParams.customerId,
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
    refreshDeps: [containerRef, searchKeywords],
  });

  return {
    data,
    loading,
    run,
  };
};

export default useLoadEvaluteTemplateList;