/**
 * 返回类型基础结构«List«StoriedBuildingDTO»»
 */
export interface Response {
  data?: StoriedBuildingDTO[];
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
 * StoriedBuildingDTO
 */
export interface StoriedBuildingDTO {
  /**
   * 楼栋名称
   */
  building?: string;
  /**
   * 楼栋ID
   */
  buildingId?: number;

  [property: string]: any;
}
