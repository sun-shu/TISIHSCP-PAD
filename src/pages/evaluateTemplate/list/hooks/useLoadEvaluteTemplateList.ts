import { useRequest } from '@@/exports';
import { getTemplateMainSelect } from '@/api/evaluateTemplate';
import { useState } from 'react';

const useLoadEvaluteTemplateList = (locationParams) => {
  const [list, setList] = useState([]);
  const { data, run, loading } = useRequest((keywords = '') => {
    return getTemplateMainSelect({
      customerId: locationParams.customerId,
      name: keywords,
    });
  }, {
    ready: !!locationParams.customerId,
    onSuccess: (res) => {
      setList(res);
    },
  });

  return {
    data,
    loading,
    run,
  };
};

export default useLoadEvaluteTemplateList;