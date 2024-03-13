import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import { request } from 'umi';

const getDictionaryContent = async () => {
  return request('/hcsp-gateway/baseApi/v1/frontend/configs', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.SILENT,
  });
};

export const DictionaryAPI = {
  getDictionaryContent,
};
