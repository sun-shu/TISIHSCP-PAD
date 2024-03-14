import { useRequest } from '@@/exports';
import { getCustomerComposeInfo } from '@/api/evaluateTemplate/index';
import { message } from 'antd';
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';
import { useEffect, useState } from 'react';
import { showScoreResult } from '@/api/evalute';
// patch: 后端提供的单项评估结果评分接口和综合评估评分接口是两个，但是返回的数据名称一样，所以这里打补丁判断
const useLoadReportData = (params) => {
  const [data, setData] = useState({});

  // 综合评估结果数据
  const { loading: evaluteGroupDataLoading, run: runLoadEvaluteGroupDataFn } = useRequest(() => {
    const sourceParmas = params.relativeType === EvluateRelativeTypeEnum.TASK ? {
      customerTaskRecordId: params.relativeId,
    } : {
      customerId: params.relativeId,
    };

    return getCustomerComposeInfo({
      ...params,
      parentRecordMainId: params.recordMainId,
      ...sourceParmas,
    });
  }, {
    manual: true,
    onSuccess: (result = {}, params) => {
      setData(result);
    },
  });

  // 单项评估结果评分
  const { loading: evaluteDataLoading, run: runLoadEvaluteDataFn } = useRequest(() => {
    return showScoreResult({
      recordMainId: params.recordMainId,
      ...params,
    });
  }, {
    manual: true,
    onSuccess: (result = {}, params) => {
      setData(result);
    },
  });


  useEffect(() => {
    params.templateComposeCode ? runLoadEvaluteGroupDataFn() : runLoadEvaluteDataFn();
  }, []);

  return {
    data,
    loading: evaluteGroupDataLoading || evaluteDataLoading,
  };
};

export default useLoadReportData;