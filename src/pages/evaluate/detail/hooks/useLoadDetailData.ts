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

      initialValues && form.setFieldsValue(initialValues);
      setInitialValues(initialValues);

      // 触发验证状态，更新填写进度条
      form.validateFields({
        validateOnly: true,
      });
    },
  });

  return {
    data,
    loading,
    initialValues,
  };
};

export default useLoadDetailData;