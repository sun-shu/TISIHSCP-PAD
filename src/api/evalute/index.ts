import { request } from '@@/exports';
import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import * as addResultInterface from './addResult.interface';
import * as addComposeResultInterface from './addComposeResult.interface';

export const addResult = async (data: addResultInterface.Request = {}, options?: {
  [key: string]: any
}): Promise<addResultInterface.QAResultDataDTO> => {
  const res = request('/hcsp-gateway/evaluateApi/v1/QAResult/addResult', {
    method: 'POST',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    data: data,
    ...(options || {}),
  });

  return res;
};
export const addComposeResult = async (data: addComposeResultInterface.Request = {}, options?: {
  [key: string]: any
}): Promise<any> => {
  const res = request('/hcsp-gateway/evaluateApi/v1/QAResult/addComposeResult', {
    method: 'POST',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    data: data,
    ...(options || {}),
  });

  return res;
};


// 单项评估结果数据
export const showResult = async (params: any, options?: {
  [key: string]: any
}): Promise<any> => {
  const res = request('/hcsp-gateway/evaluateApi/v1/QAResult/showResult', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params,
    ...(options || {}),
  });

  return res;
};

//单项评估结果评分
export const showScoreResult = async (params: any, options?: {
  [key: string]: any
}): Promise<any> => {
  const res = request('/hcsp-gateway/evaluateApi/v1/QAResult/showScoreResult', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params,
    ...(options || {}),
  });

  return res;
};