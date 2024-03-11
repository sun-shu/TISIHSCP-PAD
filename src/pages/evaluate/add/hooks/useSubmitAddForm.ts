//基础类

//类型定义/枚举
import { FormInstance } from 'antd';
import { TemplateDataResultDTO } from '@/api/evaluateTemplate/seeTemplateData.interface';
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';

//接口
import { addResult } from '@/api/evalute/index';

//组件

//hooks

//样式

//工具
import { history } from '@@/core/history';
import { useRequest } from '@@/exports';

//常量

interface UseSubmitAddFormProps {
  form: FormInstance,
  params: {
    templateCode: string,
    templateComposeCode: string,
    relativeId: string,
    relativeType: string,
  },

}

const useSubmitAddForm = (form: FormInstance, params) => {
  console.log('useSubmitAddForm', params);
  const { loading, run } = useRequest(addResult, {
    manual: true,
  });

  const submitAddForm = async () => {
    const values = await form.validateFields();

    console.log('submitAddForm', values);
    const sourceParmas = params.relativeType === EvluateRelativeTypeEnum.TASK ? {
      customerTaskRecordId: params.relativeId,
    } : {
      customerId: params.relativeId,
    };

    const data = {
      templateCode: params.templateCode,
      templateComposeCode: params.templateComposeCode,
      resultDataList: Object.entries(values).map(([key, value]) => {
        return value;
      }).filter(item => item),
      ...sourceParmas,
    };


    console.log('submitAddForm', data);
    run(data);
  };


//提交并返回
  const submitAddFormReturn = async (values: any) => {
    await submitAddForm();
    // history.replace('/evaluate/add-of-composite');
  };

  //提交并继续
  const submitAddFormContinue = async () => {
    await submitAddForm();

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