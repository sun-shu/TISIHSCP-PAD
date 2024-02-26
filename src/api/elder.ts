import { request } from '@@/exports';
import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';

// 获取老人信息
const getElderInfo = async (elderId: string, options?: { [key: string]: any }) => {
  const res = request('', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params: {
      elderId,
    },
    ...(options || {}),
  });
  return res;
};


export default {
  getElderInfo,
};