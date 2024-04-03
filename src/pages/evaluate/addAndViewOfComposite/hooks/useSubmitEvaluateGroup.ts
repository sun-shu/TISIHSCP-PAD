//  工具类
import { history } from '@@/core/history';
import { useRequest } from '@@/exports';

//  接口
import { addComposeResult } from '@/api/evalute';
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import _ from 'lodash';

const useSubmitEvaluateGroup = (params) => {
  const [canSubmit, setCanSubmit] = useState(true);
  
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
      parentRecordMainId: params.recordMainId,
    });

    viewReport();
  };

  const viewReport = () => {
    const queryParams = new URLSearchParams(_.omitBy({
      relativeId: params.relativeId,
      relativeType: params.relativeType,
      customerId: params.customerId,
      templateComposeCode: params.templateComposeCode,
      recordMainId: params.recordMainId,
    }, _.isNil));

    history.push(`/elder/evaluation-report?${queryParams}`);
  };

  return {
    submitEvaluateGroup,
    viewReport,
    loading,
    canSubmit,
  };
};

export default useSubmitEvaluateGroup;