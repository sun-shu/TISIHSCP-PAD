import { useRequest } from '@@/exports';
import { checkTemplateAnswerDisplay } from '@/api/evalute';

const useGetLastRes = (locationParams, form) => {
  // TODO by sunshu 这里需要拉取到上一次填写的结果 赋值于表单
  const { data, loading } = useRequest(() => {
    return checkTemplateAnswerDisplay({
      ...locationParams,
    });
  }, {
    onSuccess: (data) => {
      const initialValues = data.resultDataList?.reduce((acc, cur) => {
        acc[cur.elementId] = {
          ...cur,
          optionValues: cur.optionValues ? cur.optionValues.toString() : '',
        };
        return acc;
      }, {});

      initialValues && form.setFieldsValue(initialValues);

      // 触发验证状态，更新填写进度条
      form.validateFields({
        validateOnly: true,
      });
    },
  });

  //拉取上一次评估结果，返回
  return {
    data,
    loading,
  };
};

export default useGetLastRes;