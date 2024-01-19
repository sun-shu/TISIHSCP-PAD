import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import { request } from 'umi';

const getSeniorList = async (params, option = {}) => {
  return request('/api/v1/senior', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.WARN_MESSAGE,
    ...option,
  });
};

export const SeniorAPI = {
  getSeniorList,
};
