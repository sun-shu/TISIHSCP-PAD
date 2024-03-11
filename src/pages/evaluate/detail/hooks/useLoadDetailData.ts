import { useRequest } from '@@/exports';
import { showResult } from '@/api/evalute/index';

const useLoadDetailData = (form, params) => {
  const { data = {}, loading, run } = useRequest(() => {
    return showResult({
      ...params,
    });
  }, {
    ready: !!params.recordMainId,
    onSuccess: (result, params) => {
      form.setFieldsValue(result);
    },
  });

  return {
    data,
    loading,
  };
};

export default useLoadDetailData;