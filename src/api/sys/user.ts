import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import { request } from 'umi';

interface LoginParams {
  username: string;
  password: string;
}

interface UserInfo {
  userId: number;
  accessToken: string;
  firstLogin: string;
  peopleShowToken: string;
  tenantName: string;
  tenantAliasName: string;
  tenantIcon: string;
  actTel: string;
}

const login = async (data: LoginParams, options?: { [key: string]: any }): Promise<UserInfo> => {
  const loginRes = request('/hcsp-gateway/umApi/v1/pad/login', {
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
    params: {
      lang: 'zh',
    },
    ...(options || {}),
  });
};

const checkToken = async (options?: { [key: string]: any }) => {
  return request('/hcsp-gateway/umApi/v1/checkToken', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.SILENT,

    ...(options || {}),
  });
};

const loginExit = async (options?: { [key: string]: any }) => {
  return request('/hcsp-gateway/umApi/v1/currentuserexit', {
    method: 'DELETE',
    errorShowType: ErrorShowTypeEnum.SILENT,
    ...(options || {}),
  });
};

export default {
  login,
  getUserInfo,
  checkToken,
  loginExit,
};
