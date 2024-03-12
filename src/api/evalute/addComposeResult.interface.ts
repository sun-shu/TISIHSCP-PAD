/**
 * ComposeResultDTO
 */
export interface Request {
  /**
   * 用户ID
   */
  customerId?: number;
  /**
   * 用户任务记录ID
   */
  customerTaskRecordId?: number;
  /**
   * 中英文标识
   */
  lang?: string;
  /**
   * 综合评估-父ID
   */
  parentRecordMainId?: number;
  /**
   * 综合模板code
   */
  templateComposeCode?: string;
  /**
   * 所属租户
   */
  tenantId?: number;

  [property: string]: any;
}