/**
 * 返回类型基础结构«Page«RecordMainDTO»»
 */
export interface Response {
  data?: PageRecordMainDTO;
  /**
   * 描述
   */
  description?: string;
  /**
   * 状态
   */
  status?: string;

  [property: string]: any;
}

/**
 * Page«RecordMainDTO»
 */
export interface PageRecordMainDTO {
  currentPage?: number;
  dataList?: RecordMainDTO[];
  pageSize?: number;
  totalNum?: number;
  totalPage?: number;

  [property: string]: any;
}

/**
 * RecordMainDTO
 */
export interface RecordMainDTO {
  /**
   * 提交人
   */
  createUser?: string;
  /**
   * 客户Id
   */
  customerId?: number;
  /**
   * 评估状态
   */
  evaluationStatus?: string;
  /**
   * 是否有评估结果：Y/N
   */
  hasResult?: string;
  /**
   * 记录父ID
   */
  parentRecordMainId?: number;
  /**
   * 评估记录Id
   */
  recordMainId?: number;
  /**
   * 记录时间
   */
  recordTime?: Date;
  /**
   * 适老化改造项目Id
   */
  remouldProjectId?: number;
  /**
   * 模版类型:01-表单；02-评估；03-综合评估|多个类型用逗号拼接
   */
  templateClass?: string;
  /**
   * 模板编码
   */
  templateCode?: string;
  /**
   * 模板名称
   */
  templateName?: string;

  [property: string]: any;
}
