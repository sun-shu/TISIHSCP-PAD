export interface Request {
  /**
   * lang
   */
  lang?: string;
  /**
   * recordMainId
   */
  recordMainId: number;

  [property: string]: any;
}

/**
 * 返回类型基础结构«DataTemplateShowDTO»
 */
export interface Response {
  data?: DataTemplateShowDTO;
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
 * DataTemplateShowDTO
 */
export interface DataTemplateShowDTO {
  /**
   * 评估结果
   */
  commentaryName?: string;
  /**
   * 问卷评估全量数据
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
   * 评估结果ID
   */
  recordMainId?: number;
  /**
   * 记录得分
   */
  recordScore?: number;
  /**
   * 创建时间
   */
  recordTime?: Date;
  resDTO?: TemplateResDTO;
  /**
   * 模版ID
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

/**
 * TemplateResDTO
 */
export interface TemplateResDTO {
  /**
   * 答题时表单显示-见基表：(answerDisplay)
   */
  answerDisplay?: string;
  /**
   * 元素数据集合
   */
  elementList?: TemplateElementResDTO[];
  /**
   * 高亮显示结果差异-见基表：(highlightDisplay)
   */
  highlightDisplay?: string;
  /**
   * 模版类型-见基表：(templateClass)
   */
  templateClass?: string;
  /**
   * 模版code
   */
  templateCode?: string;
  /**
   * 组合模版编码
   */
  templateComposeCode?: string;
  /**
   * 模版名称
   */
  templateDesc?: string;
  /**
   * 模版名称
   */
  templateName?: string;

  [property: string]: any;
}

/**
 * TemplateElementResDTO
 */
export interface TemplateElementResDTO {
  /**
   * 答案
   */
  answer?: string;
  /**
   * 表格题-body集合
   */
  bodyList?: Array<TableDTO[]>;
  /**
   * 元素规则数据-后台处理使用
   */
  businessRules?: BusinessRule[];
  /**
   * 模板元素类型-见基表：(elementDataType)
   */
  elementDataType?: string;
  /**
   * 元素显示顺序
   */
  elementDisplayOrder?: number;
  /**
   * 题目显示标记-见基表：(elementIsShow)
   */
  elementIsShow?: string;
  /**
   * 元素key(对应保存结果json中的识别key)
   */
  elementKey?: string;
  /**
   * 最大长度
   */
  elementMaxLength?: number;
  /**
   * 元素名称
   */
  elementName?: string;
  /**
   * 元素控件提示文字
   */
  elementPlaceholder?: string;
  /**
   * 元素选项类型(0-1非必选 02-必选)-见基表：(elementRequireFlg)
   */
  elementRequireFlg?: string;
  /**
   * 引导提示
   */
  elementTips?: string;
  /**
   * 元素类型-见基表：(elementType)
   */
  elementType?: string;
  /**
   * 表格题-head集合
   */
  headList?: TableDTO[];
  /**
   * 元素ID
   */
  id?: number;
  /**
   * 选项数据集合
   */
  optionList?: TemplateElementOptionResDTO[];
  /**
   * 选项中有其他文本录入
   */
  otherText?: string;
  /**
   * 规则编码
   */
  ruleCode?: string;
  /**
   * 模版code
   */
  templateCode?: string;

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

/**
 * BusinessRule
 */
export interface BusinessRule {
  activeCode?: string;
  activeContent?: string;
  activeType?: string;
  businessCode?: string;
  createTime?: Date;
  createUser?: string;
  delFlg?: number;
  id?: number;
  ruleCode?: string;
  ruleType?: string;
  tenantId?: number;
  updateTime?: Date;
  updateUser?: string;
 
  [property: string]: any;
}

/**
 * TemplateElementOptionResDTO
 */
export interface TemplateElementOptionResDTO {
  /**
   * 选项规则数据-后台处理使用
   */
  businessRules?: BusinessRule[];
  /**
   * 元素ID
   */
  elementId?: number;
  /**
   * 元素类型
   */
  elementType?: string;
  /**
   * 选项ID
   */
  id?: number;
  /**
   * 跳题逻辑-题目ID
   */
  nextElementId?: number;
  /**
   * 控件类型-见基表：(optionControlType)
   */
  optionControlType?: string;
  /**
   * 类型-见基表：(optionDataType)
   */
  optionDataType?: string;
  /**
   * 显示顺序
   */
  optionDisplayOrder?: string;
  /**
   * 题目显示标记-见基表：(optionIsShow)
   */
  optionIsShow?: string;
  /**
   * 答案key
   */
  optionKey?: string;
  /**
   * 内容长度
   */
  optionMaxLength?: number;
  /**
   * 答案名称
   */
  optionName?: string;
  /**
   * 控件提示文字
   */
  optionPlaceholder?: string;
  /**
   * 必选标志，01-非必选 02-必选-见基表：(optionRequireFlg)
   */
  optionRequireFlg?: string;
  /**
   * 引导语
   */
  optionTips?: string;
  /**
   * 答案类型-见基表：(optionType)
   */
  optionType?: string;
  /**
   * 规则code
   */
  ruleCode?: string;
  /**
   * 选项得分
   */
  score?: number;
  /**
   * 模版code
   */
  templateCode?: string;

  [property: string]: any;
}