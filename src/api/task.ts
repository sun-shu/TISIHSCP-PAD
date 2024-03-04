// /hcsp-gateway/planApi/customerTask/getCustomerCarePlanPad

import ErrorShowTypeEnum from '@/enums/sys/ErrorShowTypeEnum';
import { request } from 'umi';


/**
 * CustomerTaskRecordPadDTO
 */
export interface CustomerTaskRecordPadDTO {
  /**
   * 本月
   */
  currentMonth?: CustomerTaskRecordPadItemDTO[];
  /**
   * 上个月
   */
  lastMonth?: CustomerTaskRecordPadItemDTO[];
  /**
   * 下个月
   */
  nextMonth?: CustomerTaskRecordPadItemDTO[];

  [property: string]: any;
}

/**
 * CustomerTaskRecordPadItemDTO
 */
export interface CustomerTaskRecordPadItemDTO {
  /**
   * 年龄
   */
  age?: number;
  /**
   * 床位
   */
  bedName?: string;
  /**
   * 入院日期
   */
  checkInTime?: string;
  /**
   * 客户ID
   */
  customerId?: number;
  /**
   * 客户任务记录表主键ID
   */
  id?: number;
  /**
   * 图像地址
   */
  imageUrl?: string;
  /**
   * 客户姓名
   */
  name?: string;
  /**
   * 护理等级
   */
  nurseGrade?: string;
  /**
   * 计划时间
   */
  taskExecuteDate?: string;
  /**
   * 模板的名称
   */
  templateName?: string;

  [property: string]: any;
}

/**
 * CustomerTaskRecordPadDTO
 */
export interface CustomerTaskRecordPadDTO {
  /**
   * 本月
   */
  currentMonth?: CustomerTaskRecordPadItemDTO[];
  /**
   * 上个月
   */
  lastMonth?: CustomerTaskRecordPadItemDTO[];
  /**
   * 下个月
   */
  nextMonth?: CustomerTaskRecordPadItemDTO[];

  [property: string]: any;
}

interface GetTaskRequest {
  /**
   * 长者姓名 或 评估模板名称
   */
  name?: string;

  [property: string]: any;
}

export const getTaskList = async (data: GetTaskRequest = {}, options?: {
  [key: string]: any
}): Promise<CustomerTaskRecordPadDTO> => {
  const res = request('/hcsp-gateway/planApi/v1/customerTask/getCustomerCarePlanPad', {
    method: 'GET',
    errorShowType: ErrorShowTypeEnum.ERROR_MESSAGE,
    params: data,
    ...(options || {}),
  });

  return res;
};


