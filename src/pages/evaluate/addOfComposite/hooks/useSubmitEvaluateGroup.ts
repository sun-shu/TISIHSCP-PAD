//  工具类
import { history } from '@@/core/history';
import { useRequest } from '@@/exports';

//  接口
import { addComposeResult } from '@/api/evalute';
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';
import { message } from 'antd';

const useSubmitEvaluateGroup = (params) => {
  const { loading, run } = useRequest(addComposeResult, {
    manual: true,
    onSuccess: (result, params) => {
      message.success('提交成功');
    },
  });

  const submitEvaluateGroup = async (evaluateGroup: any) => {
    const sourceParmas = params.relativeType === EvluateRelativeTypeEnum.TASK ? {
      customerTaskRecordId: params.relativeId,
    } : {
      customerId: params.relativeId,
    };

    // 综合评估提交
    await run({
      ...params,
      ...sourceParmas,
    });

    history.push(`/elder/evaluation-report?relativeId=${params.relativeId}&relativeType=${params.relativeType}&customerId=${params.customerId}`);
  };

  const viewReport = async () => {
    history.push(`/elder/evaluation-report?relativeId=${params.relativeId}&relativeType=${params.relativeType}&customerId=${params.customerId}`);
  };

  return {
    submitEvaluateGroup,
    viewReport,
    loading,
  };
};

export default useSubmitEvaluateGroup;