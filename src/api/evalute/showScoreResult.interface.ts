/**
 * 返回类型基础结构«CommentaryResultShowDTO»
 */
export interface Response {
  data?: CommentaryResultShowDTO;
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
 * CommentaryResultShowDTO
 */
export interface CommentaryResultShowDTO {
  /**
   * 评估结果
   */
  commentaryName?: string;
  /**
   * 提交内容
   */
  content?: string;
  /**
   * 用户ID
   */
  customerId?: number;
  /**
   * 用户名称
   */
  customerName?: string;
  /**
   * 记录得分
   */
  recordScore?: number;
  /**
   * 创建时间
   */
  recordTime?: Date;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 模版code
   */
  templateCode?: string;
  /**
   * 模版名称
   */
  templateName?: string;
  /**
   * 租户ID
   */
  tenantId?: number;

  [property: string]: any;
}