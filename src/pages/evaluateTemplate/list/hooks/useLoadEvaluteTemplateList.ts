import { useRequest } from '@@/exports';
import { getTemplateMainSelect } from '@/api/evaluateTemplate';
import { useState } from 'react';

const useLoadEvaluteTemplateList = (locationParams) => {
  const [list, setList] = useState([]);
  const { data, run } = useRequest(() => {
    return getTemplateMainSelect({
      customerId: locationParams.customerId,
    });
  }, {
    ready: !!locationParams.customerId,
    onSuccess: (res) => {
      setList(res);
    },
  });

  return {
    data,
  };
};

export default useLoadEvaluteTemplateList;