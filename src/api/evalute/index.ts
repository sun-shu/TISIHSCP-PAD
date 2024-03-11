import { request } from '@@/exports';
import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import * as addResultInterface from './addResult.interface';
import * as addComposeResultInterface from './addComposeResult.interface';

export const addResult = async (data: addResultInterface.Request = {}, options?: {
  [key: string]: any
}): Promise<addResultInterface.QAResultDataDTO> => {
  const res = request('', {
    method: 'POST',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params: data,
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
    params: data,
    ...(options || {}),
  });

  return res;
};