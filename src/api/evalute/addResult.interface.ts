/**
 * ResultDTO
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
   * 评估结果ID
   */
  recordMainId?: number;
  /**
   * 提交时间
   */
  recordTime?: string;
  /**
   * 项目ID
   */
  remouldProjectId?: number;
  /**
   * 结果数据
   */
  resultDataList?: QAResultDataDTO[];
  /**
   * 模板code
   */
  templateCode?: string;
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

/**
 * QAResultDataDTO
 */
export interface QAResultDataDTO {
  /**
   * 问答答案
   */
  answer?: string;
  /**
   * 表格题-body集合
   */
  bodyList?: Array<TableDTO[]>;
  /**
   * 元素ID
   */
  elementId?: number;
  /**
   * 表格题-head集合
   */
  headList?: TableDTO[];
  /**
   * 类型
   */
  optionType?: string;
  /**
   * 选项答案，多个逗号分隔
   */
  optionValues?: string;

  [property: string]: any;
}

/**
 * TableDTO
 */
export interface TableDTO {
  /**
   * 问答答案
   */
  answer?: string;
  /**
   * 选项ID
   */
  id?: number;
  /**
   * 控件类型
   */
  optionControlType?: string;
  /**
   * 类型
   */
  optionDataType?: string;
  /**
   * 内容长度
   */
  optionMaxLength?: number;
  /**
   * 选项名称
   */
  optionName?: string;
  /**
   * 控件提示文字
   */
  optionPlaceholder?: string;
  /**
   * 必选标志，01-非必选 02-必选
   */
  optionRequireFlg?: string;
  /**
   * 引导语
   */
  optionTips?: string;
  /**
   * 选项答案
   */
  optionValues?: string;

  [property: string]: any;
}
