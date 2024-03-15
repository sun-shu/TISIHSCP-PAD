import { useRequest } from 'umi';
import { getRecordList } from '@/api/evalute';
import { TemplateClassEnum } from '@/enums/TemplateClassEnum';
import _ from 'lodash';
import useLoadMoreScroll from '@/hooks/useLoadMoreScroll';
import { useState } from 'react';


const useLoadEvaluteList = (locationParams) => {
  // const [currentPage, setCurrentPage] = useState(0);
  //
  // const request = useRequest(() => {
  //   return getRecordList({
  //     templateClass: [TemplateClassEnum.Evaluate, TemplateClassEnum.EvaluateGroup, TemplateClassEnum.Form].join(','),
  //     ...locationParams,
  //     pageSize: 5,
  //     pageNumber: 1,
  //   });
  // }, {
  //   manual: true,
  //   onSuccess: (res) => {
  //     console.log('useLoadEvaluteList', res);
  //   },
  // });
  //
  // const { data } = useLoadMoreScroll(request.run, {
  //   currentPage,
  //   pageSize: 5,
  //   total: 0,
  // });
  // useLoadMoreScroll();
  const { data, loading } = useRequest(() => {
    return getRecordList({
      templateClass: [TemplateClassEnum.Evaluate, TemplateClassEnum.EvaluateGroup, TemplateClassEnum.Form].join(','),
      ...locationParams,
      pageSize: 5,
      pageNumber: 1,
    });
  });

  return {
    data,
    loading,
  };
};

export default useLoadEvaluteList;