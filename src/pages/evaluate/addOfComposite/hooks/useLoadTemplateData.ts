import { useMatch, useRequest } from '@@/exports';
import {
  CustomerComposeInfoResDTO,
  GetCustomerComposeInfoRequest,
} from '@/api/evaluateTemplate/getCustomerComposeInfo.interface';
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';
import { getCustomerComposeInfo } from '@/api/evaluateTemplate';
import { useState } from 'react';

const useLoadTemplateData = (params) => {
  const [filledListData, setFilledListData] = useState([]);
  const [notFilledListData, setNotFilledListData] = useState([]);


  const { relativeType, relativeId, templateComposeCode, customerId } = params;
  const { data: templateData = {}, error, loading, run }: {
    data: CustomerComposeInfoResDTO;
    error: any;
    loading: boolean;
    run: any;
  } = useRequest(() => {
    const requestParams: GetCustomerComposeInfoRequest = {
      templateComposeCode,
      ...(relativeType === EvluateRelativeTypeEnum.TASK ? { customerTaskRecordId: relativeId } : {}),
      ...(relativeType === EvluateRelativeTypeEnum.HISTORY ? { recordMainId: relativeId } : {}),
      ...(relativeType === EvluateRelativeTypeEnum.CUSTOMER ? { customerId: customerId } : {}),
    };

    console.log('requestParams', requestParams);

    return getCustomerComposeInfo(requestParams);
  }, {
    ready: !!templateComposeCode,
    onSuccess: (result, params) => {
      setFilledListData(result.completeList || []);
      setNotFilledListData(result.incompleteList || []);
    },
  });

  return {
    templateData,
    error,
    loading,
    run,
    filledListData,
    notFilledListData,
  };

};

export default useLoadTemplateData;