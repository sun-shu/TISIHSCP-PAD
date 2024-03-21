import { request } from '@@/exports';
import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';

// 获取老人信息
export const getCustomerWechat = async (customerId: string, options?: { [key: string]: any }) => {
  const res = request('/hcsp-gateway/clientApi/v1/customer/getCustomerWechat', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params: {
      customerId,
    },
    ...(options || {}),
  });
  return res;
};

// 获取老人信息列表
export const getCustomerListPad = async (params, options?: { [key: string]: any }): Promise<any> => {
  const res = request('/hcsp-gateway/clientApi/v1/customer/getCustomerListPad', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params,
    ...(options || {}),
  });
  return res;
};


// 获取老人信息列表
export const getCustomerListWechat = async (params, options?: { [key: string]: any }): Promise<any> => {
  const res = request('/hcsp-gateway/clientApi/v1/customer/getCustomerListWechat', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params,
    ...(options || {}),
  });
  return res;
};

