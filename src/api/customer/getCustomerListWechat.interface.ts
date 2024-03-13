/**
 * 返回类型基础结构«CustomerListWechatDTO»
 */
export interface Response {
  data?: CustomerListWechatDTO;
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
 * CustomerListWechatDTO
 */
export interface CustomerListWechatDTO {
  /**
   * 年龄
   */
  age?: number;
  /**
   * 床位
   */
  bedName?: string;
  /**
   * 个人客户ID
   */
  customerId?: number;
  /**
   * 性别
   */
  gender?: string;
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

  [property: string]: any;
}
