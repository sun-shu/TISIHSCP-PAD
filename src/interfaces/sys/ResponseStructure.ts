// 与后端约定的响应数据格式

interface ResponseStructure {
  data: any;
  status?: number;
  description?: string;
}

export default ResponseStructure;
