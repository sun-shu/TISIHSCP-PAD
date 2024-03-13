import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import { request } from 'umi';
import * as seeTemplateDataInterface from './seeTemplateData.interface';
import * as getCustomerComposeInfoInterface from './getCustomerComposeInfo.interface';

export const getEvaluateTemplateData = async (data: seeTemplateDataInterface.GetEvaluateTemplateDataRequest = {}, options?: {
  [key: string]: any
}): Promise<seeTemplateDataInterface.TemplateDataResultDTO> => {
  const res = request('/hcsp-gateway/evaluateApi/v1/template/seeTemplateData', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params: data,
    ...(options || {}),
  });

  return res;
};


//  PAD-查询长者任务综合模版详情
export const getCustomerComposeInfo = async (data: getCustomerComposeInfoInterface.GetCustomerComposeInfoRequest = {}, options?: {
  [key: string]: any
}): Promise<getCustomerComposeInfoInterface.CustomerComposeInfoResDTO> => {
  const res = request('/hcsp-gateway/evaluateApi/v1/templateMainCompose/getCustomerComposeInfo', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params: data,
    ...(options || {}),
  });

  return res;
};
 
export const getTemplateMainSelect = async (data: getCustomerComposeInfoInterface.GetCustomerComposeInfoRequest = {}, options?: {
  [key: string]: any
}): Promise<getCustomerComposeInfoInterface.CustomerComposeInfoResDTO> => {
  const res = request('/hcsp-gateway/evaluateApi/v1/template/getTemplateMainSelect', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params: data,
    ...(options || {}),
  });

  return res;
};