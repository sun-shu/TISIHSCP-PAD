import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import { request } from 'umi';

const login = async (data, options?: { [key: string]: any }) => {
  const loginRes = request('/hcsp-gateway/umApi/v1/um/login', {
    method: 'POST',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    data,
    ...(options || {}),
  });
  console.log('loginRes', loginRes);
  return loginRes;
};

const getUserInfo = async (options?: { [key: string]: any }) => {
  return request('/hcsp-gateway/umApi/v1/user', {
    method: 'GET',
    params:{
      lang:'zh'
    },
    ...(options || {}),
  });
};

const checkToken = async (options?: { [key: string]: any }) => {
  return request('/hcsp-gateway/umApi/v1/checkToken', {
    method: 'GET',
    ...(options || {}),
  });
};

export default {
  login,
  getUserInfo,
  checkToken,
};
