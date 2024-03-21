import { useRequest } from 'umi';
import { getRecordList } from '@/api/evalute';
import { TemplateClassEnum } from '@/enums/TemplateClassEnum';
import _ from 'lodash';
import useLoadMoreScroll from '@/hooks/useLoadMoreScroll';
import { useState } from 'react';


const useLoadEvaluteList = (locationParams, containerRef) => {
  const { data, loading } = useRequest((page = {
    currentPage: 0,
    pageSize: 10,
    total: 0,
  }) => {
    console.log('useLoadEvaluteList page', page);
    return getRecordList({
      templateClass: [TemplateClassEnum.Evaluate, TemplateClassEnum.EvaluateGroup, TemplateClassEnum.Form].join(','),
      ...locationParams,
      pageSize: 10,
      pageNumber: page.currentPage + 1,
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
    // isNoMore: (d) => (d ? d.list.length >= d.total : false),
  });

  return {
    data,
    loading,
  };
};

export default useLoadEvaluteList;