import { useRequest } from '@@/exports';
import { showResult } from '@/api/evalute/index';
import { useState } from 'react';

const useLoadDetailData = (form, params) => {
  const [initialValues, setInitialValues] = useState({});
  const { data = {}, loading, run } = useRequest(() => {
    return showResult({
      ...params,
    });
  }, {
    ready: !!params.recordMainId,
    onSuccess: (result, params) => {
      const initialValues = result.resultDataList?.reduce((acc, cur) => {
        acc[cur.elementId] = {
          ...cur,
          optionValues: cur.optionValues ? cur.optionValues.toString() : '',
        };
        return acc;
      }, {});
      console.log('initialValues', initialValues);
      // form.setFieldsValue(initialValues);
      setInitialValues(initialValues);
    },
  });

  return {
    data,
    loading,
    initialValues,
  };
};

export default useLoadDetailData;