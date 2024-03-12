import { useRequest } from '@@/exports';
import { getCustomerComposeInfo } from '@/api/evaluateTemplate/index';
import { message } from 'antd';
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';

const useLoadReportData = (params) => {
  const { data = {}, loading, run } = useRequest(() => {
    const sourceParmas = params.relativeType === EvluateRelativeTypeEnum.TASK ? {
      customerTaskRecordId: params.relativeId,
    } : {
      customerId: params.relativeId,
    };


    return getCustomerComposeInfo({
      ...params,
      ...sourceParmas,
    });
  }, {
    ready: !!params.relativeId,
    onSuccess: (result, params) => {
    },
  });

  return {
    data,
    loading,
  };
};

export default useLoadReportData;