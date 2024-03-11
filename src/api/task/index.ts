import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import { request } from 'umi';
import * as getTaskListInterface from './getTaskList.interface';

export const getTaskList = async (data: getTaskListInterface.GetTaskRequest = {}, options?: {
  [key: string]: any
}): Promise<getTaskListInterface.CustomerTaskRecordPadDTO> => {
  // const res = await request("/local/getTaskList", {
  //   method: 'GET',
  //   errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
  //   params: data,
  //   ...(options || {}),
  // })
  const res = request('/hcsp-gateway/planApi/v1/customerTask/getCustomerCarePlanPad', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params: data,
    ...(options || {}),
  });
  console.log(res, '获取列表');
  return res;
};


