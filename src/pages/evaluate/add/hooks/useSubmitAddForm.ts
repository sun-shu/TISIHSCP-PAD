//基础类

//类型定义/枚举
import { FormInstance } from 'antd';
import { TemplateDataResultDTO } from '@/api/evaluateTemplate/seeTemplateData.interface';

//接口
import { addResult } from '@/api/evalute/index';

//组件

//hooks

//样式

//工具
import { history } from '@@/core/history';
import { useRequest } from '@@/exports';

//常量

const useSubmitAddForm = (form: FormInstance) => {
  const { loading, run } = useRequest(addResult, {
    manual: true,
  });

  const handleFormData = () => {
    const values = form.getFieldsValue();

    console.log('handleFormData', values);

    run({});
    return {};

    //这里处理form
  };

  const submitAddForm = () => {
    const data = handleFormData();

  };

//提交并返回
  const submitAddFormReturn = (values: any) => {
    submitAddForm();
    console.log('submitAddForm', values);
    // history.replace('/evaluate/add-of-composite');
  };

  //提交并继续
  const submitAddFormContinue = () => {
    submitAddForm();

    //这里处理formconsole.log('submitAddFormContinue');
    // history.replace('/evaluate/add/next');
  };

  //返回按钮需要的两个方法
  return {
    submitAddFormReturn,
    submitAddFormContinue,
  };
};

export default useSubmitAddForm;