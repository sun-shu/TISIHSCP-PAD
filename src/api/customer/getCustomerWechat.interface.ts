export interface Request {
  /**
   * 长者ID
   */
  customerId: number;
  /**
   * 中英文标识
   */
  lang?: string;

  [property: string]: any;
}

/**
 * 返回类型基础结构«CustomerWechatDTO»
 */
export interface Response {
  data?: CustomerWechatDTO;
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
 * CustomerWechatDTO
 */
export interface CustomerWechatDTO {
  /**
   * 年龄
   */
  age?: number;
  /**
   * 认知症等级
   */
  amzGrade?: string;
  /**
   * 床位ID
   */
  bedId?: number;
  /**
   * 床位
   */
  bedName?: string;
  /**
   * 入住状态
   */
  checkInStatus?: string;
  /**
   * 入院日期
   */
  checkInTime?: Date;
  /**
   * 个人客户ID
   */
  customerId?: number;
  /**
   * 现病史
   */
  diseaseHistory?: string;
  /**
   * 紧急联系人
   */
  emergencyContact?: string;
  /**
   * 紧急联系人方式
   */
  emergencyContactWay?: string;
  /**
   * 性别
   */
  gender?: string;
  /**
   * 图像地址
   */
  imageUrl?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 护理等级
   */
  nurseGrade?: string;

  [property: string]: any;
}