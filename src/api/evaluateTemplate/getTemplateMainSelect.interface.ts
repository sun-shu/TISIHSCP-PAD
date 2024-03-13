/**
 * 返回类型基础结构«Page«TemplateMainSelect»»
 */
export interface Response {
  data?: PageTemplateMainSelect;
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
 * Page«TemplateMainSelect»
 */
export interface PageTemplateMainSelect {
  currentPage?: number;
  dataList?: TemplateMainSelect[];
  pageSize?: number;
  totalNum?: number;
  totalPage?: number;

  [property: string]: any;
}

/**
 * TemplateMainSelect
 */
export interface TemplateMainSelect {
  /**
   * 是否公开
   */
  isPublicFlg?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 模版类型
   */
  templateClass?: string;
  /**
   * 模版编码
   */
  templateCode?: string;
  /**
   * 描述
   */
  templateDesc?: string;

  [property: string]: any;
}