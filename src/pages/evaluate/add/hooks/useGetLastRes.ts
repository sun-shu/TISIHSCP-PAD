import { useRequest } from '@@/exports';
import { checkTemplateAnswerDisplay } from '@/api/evalute';
import { useEffect } from 'react';

const useGetLastRes = (locationParams, form) => {
  const { data, loading, run } = useRequest(() => {
    return checkTemplateAnswerDisplay({
      ...locationParams,
    });
  }, {
    manual: true,
    onSuccess: (data) => {
      const initialValues = data.resultDataList?.reduce((acc, cur) => {
        acc[cur.elementId] = {
          ...cur,
          optionValues: cur.optionValues ? cur.optionValues.toString() : '',
        };
        return acc;
      }, {});

      console.log('initialValues', initialValues);
      initialValues && form.setFieldsValue(initialValues);

      // 触发验证状态，更新填写进度条
      form.validateFields({
        validateOnly: true,
      });

    },
  });

  useEffect(() => {
    run();
  }, [locationParams.templateCode]);


  //拉取上一次评估结果，返回
  return {
    data,
    loading,
  };
};

export default useGetLastRes;