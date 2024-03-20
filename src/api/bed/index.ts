import { request } from '@@/exports';
import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import { StoriedBuildingDTO, Response } from './getBuildingList.interface';
// 获取老人信息
export const getBedList = async (params = {}, options?: { [key: string]: any }) => {
  const res = request('/hcsp-gateway/baseApi/v1/bedInfo/getBedForWx', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params,
    ...(options || {}),
  });
  return res;
};
