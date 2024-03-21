// src/app.ts
import userAPI from '@/api/sys/user';
import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import ResponseStructure from '@/interfaces/sys/ResponseStructure';
import '@/patch/preflight.css';
// 这个插件是为了适配各种Pad型号，根据宽度自动修改html的font-size，从而实现rem的自适应
// import 'amfe-flexible';
import { message, notification } from 'antd';
import Cookies from 'js-cookie';
import { history } from 'umi';
import type { RequestConfig, AxiosResponse } from 'umi';
// import mock from "mock"

type Result<T> = {
  status: string
  code: number
  msg: string
  data: T
  description: T
} & AxiosResponse<T>
const loginPath = '/login';

const authHeaderInterceptor = (url: string, options: RequestConfig) => {
  const authHeader = { 'X-Authorization': Cookies.get('TOKEN') };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};

// 运行时配置
//RequestConfig 需要配置 200以外状态码报错 200以内根据status，description判断，正确直接返回data,错误返回错误信息和status，
// 通过请求参数配置错误信息的展示方式
// 配置线上请求地址，配置cookies请求拦截，未登录页面跳转.
// 登录时请求用户信息，Initiate中checkToken,如果token存在，请求用户信息，如果不存在，跳转登录页面
export const request: RequestConfig = {
  // 统一的请求设定
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },

  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误抛出
    // errorThrower: (res: ResponseStructure) => {
    //   console.log('errorThrower', res);
    //
    //   const { data, description, status } = res;
    //   if (status !== 0) {
    //     const error: any = new Error(description);
    //     error.name = 'BizError';
    //     error.info = { status, description, data };
    //     throw error; // 抛出自制的错误
    //   }
    // },
    // 错误接收及处理
    errorHandler: (error: any, opts: any) => {
      console.log('errorHandler', error, opts);
      if (opts?.skipErrorHandler) throw error;
      // 我们的 errorThrower 抛出的错误。
      if (error.name === 'BizError') {
        const errorInfo: ResponseStructure | undefined = error.info;
        const { errorShowType = ErrorShowTypeEnum.SILENT } = opts;
        if (errorInfo && errorShowType) {
          const { description, status } = errorInfo;
          switch (errorShowType) {
            case ErrorShowTypeEnum.SILENT:
              // do nothing
              break;
            case ErrorShowTypeEnum.WARN_MESSAGE:
              message.warning(description);
              break;
            case ErrorShowTypeEnum.ERROR_MESSAGE:
              message.error(description);
              break;
            case ErrorShowTypeEnum.NOTIFICATION:
              notification.open({
                description: description,
                message: status,
              });
              break;
            case ErrorShowTypeEnum.REDIRECT:
              // TODO: redirect
              break;
            default:
              message.error(description);
          }
        }
      } else if (error.response) {
        // Axios 的错误
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        message.error(`Response status:${error.response.status}`);
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
        // 而在node.js中是 http.ClientRequest 的实例
        message.error('None response! Please retry.');
      } else {
        // 发送请求时出了点问题
        message.error('Request error, please retry.');
      }
    },
  },

  // 请求拦截器
  requestInterceptors: [
    (config) => {
      console.log('requestInterceptors', config);
      // 拦截请求配置，进行个性化处理。
      const url = config.url.concat('');

      const params = { ...config.params };
      if (config.method === 'get') {
        params.lang = 'zh';
      }
      return { ...config, url, params };
    },
    authHeaderInterceptor,
  ],

  // 响应拦截器
  responseInterceptors: [
    [(response: any) => {
      // 拦截响应数据，进行个性化处理 没有权限跳转登录页
      const { data, status, description } = response.data as Result<any>;

      if ((status !== '0')) {
        return Promise.reject({
          name: 'BizError',
          info: { status, description, data },
        });
      }

      return response;
    },
      (error: Error) => {
        if (error.response.status === 401) {
          history.push('/login');
        }

        const { status, description, data } = error.response.data;
        if ((status !== '0')) {
          return Promise.reject({
            name: 'BizError',
            info: { status, description, data },
          });
        }

        // do nothing4
        console.log('responseInterceptors', error);
      }],
  ],
};

// 全局数据
export async function getInitialState() {
  // 在这里判断是否登录，如果登录加载全局数据。在登录回调中refresh这个全局数据

  const fetchUserInfo = async () => {
    const { data } = await userAPI.getUserInfo();

    return data;
  };

  const checkToken = async () => {
    try {
      await userAPI.checkToken({
        skipErrorHandler: true,
      });

      return true;
    } catch (error) {
      history.push('/login');
    }

    return false;
  };


  if (location.pathname !== loginPath) {
    const isEffectiveToken = await checkToken();
    if (isEffectiveToken) {
      const currentUser = await fetchUserInfo();
      return {
        fetchUserInfo,
        currentUser,
      };
    }
  }

  return {
    fetchUserInfo,
  };
}
