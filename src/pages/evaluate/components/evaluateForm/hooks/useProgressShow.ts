// 思路：过滤不展示的，form值变化时调用验证 初始化时调用一次表单验证
// 全部

import { useEffect, useState } from 'react';
import { FormInstance } from 'antd';

const useProgressShow = (form: FormInstance, initialValues) => {
  const [fillCount, setFillCount] = useState(5);
  const [needFillCount, setNeedFillCount] = useState(10);

  useEffect(() => {
    initialValues && form.setFieldsValue(initialValues);
    form?.validateFields({
      validateOnly: true,
    });
  }, [initialValues]);

  const onFieldsChange = (changedFields, allFields) => {
    setFillCount(allFields.filter((field) => {
      const hasContent = field.value?.answer || field.value?.optionValues;
      return hasContent && !field.validating && field.errors.length === 0;
    }).length);
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