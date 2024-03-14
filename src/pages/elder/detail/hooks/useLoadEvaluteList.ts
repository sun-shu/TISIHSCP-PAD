import { useRequest } from 'umi';
import { getRecordList } from '@/api/evalute';
import { TemplateClassEnum } from '@/enums/TemplateClassEnum';
import _ from 'lodash';


const useLoadEvaluteList = (locationParams) => {
  const { data } = useRequest(() => {
    return getRecordList({
      templateClass: [TemplateClassEnum.Evaluate, TemplateClassEnum.EvaluateGroup, TemplateClassEnum.Form].join(','),
      ...locationParams,
      pageSize: 1000,
      pageNumber: 1,
    });
  });

  return {
    data,
  };
};

export default useLoadEvaluteList;