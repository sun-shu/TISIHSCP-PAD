/**
 * CustomerComposeInfoResDTO
 */
export interface CustomerComposeInfoResDTO {
  /**
   * 完成子模版数量
   */
  completeCount?: number;
  /**
   * 已完成子模版数据
   */
  completeList?: CustomerComposeResultResDTO[];
  /**
   * 执行状态
   */
  evaluationStatus?: string;
  /**
   * 未完成子模版数据
   */
  incompleteList?: CustomerComposeResultResDTO[];
  /**
   * 评估开始时间
   */
  recordTime?: number;
  /**
   * 综合模板code
   */
  templateComposeCode?: string;
  /**
   * 综合模板名称
   */
  templateComposeName?: string;
  /**
   * 子模版数量
   */
  totalCount?: number;

  [property: string]: any;
}

/**
 * CustomerComposeResultResDTO
 */
export interface CustomerComposeResultResDTO {
  /**
   * 执行状态｜见字典表：evaluationStatus
   */
  evaluationStatus?: string;
  /**
   * 题目数量
   */
  questionsCount?: number;
  /**
   * 评估结果ID
   */
  recordMainId?: number;
  /**
   * 提交时间
   */
  recordTime?: number;
  /**
   * 模版类型
   */
  templateClass?: string;
  /**
   * 模版code
   */
  templateCode?: string;
  /**
   * 模版序号
   */
  templateDisplayOrder?: number;
  /**
   * 模版名称
   */
  templateName?: string;

  [property: string]: any;
}

export interface GetCustomerComposeInfoRequest {
  /**
   * 用户任务记录ID
   */
  customerTaskRecordId?: number;
  /**
   * 中英文标识
   */
  lang?: string;
  /**
   * 评估记录ID
   */
  recordMainId?: number;
  /**
   * 组合模版编码
   */
  templateComposeCode?: string;
  /**
   * 所属租户
   */
  tenantId?: number;

  [property: string]: any;
}
