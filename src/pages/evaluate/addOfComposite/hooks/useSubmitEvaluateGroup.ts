//  工具类
import { history } from '@@/core/history';
import { useRequest } from '@@/exports';

//  接口
import { addComposeResult } from '@/api/evalute';

const useSubmitEvaluateGroup = () => {
  const { loading, run } = useRequest(addComposeResult, {
    manual: true,
  });

  const submitEvaluateGroup = async (evaluateGroup: any) => {
    // 综合评估提交
    run({});
    history.push('/elder/detail');
  };

  return {
    submitEvaluateGroup,
    loading,
  };
};

export default useSubmitEvaluateGroup;