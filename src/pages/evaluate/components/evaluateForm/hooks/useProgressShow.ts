// 思路：过滤不展示的，form值变化时调用验证 初始化时调用一次表单验证
// 全部

import { useEffect, useState } from 'react';
import { FormInstance } from 'antd';

const useProgressShow = (form: FormInstance) => {
  const [fillCount, setFillCount] = useState(5);
  const [needFillCount, setNeedFillCount] = useState(10);

  useEffect(() => {
    form?.validateFields({
      validateOnly: true,
    });
  }, []);

  const onFieldsChange = (changedFields, allFields) => {
    setFillCount(allFields.filter((field) => field.validated && field.errors.length === 0).length);
    setNeedFillCount(allFields.length);
  };

  const onValuesChange = async (changedValues, allValues = []) => {
    form?.validateFields({
      validateOnly: true,
    });
  };

  return {
    fillCount,
    needFillCount,
    onFieldsChange,
    onValuesChange,
  };
};

export default useProgressShow;