//基础类

//类型定义/枚举
import { FormInstance, message } from 'antd';
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


const useSubmitAddForm = (form: FormInstance, params) => {
  const { templateCode, templateComposeCode, relativeType, relativeId, customerId } = params;

  console.log('useSubmitAddForm', params);
  const { loading, run, data } = useRequest(addResult, {
    manual: true,
    onSuccess: (result, params) => {
      message.success('提交成功');
    },
  });

  const submitAddForm = async () => {
    const values = await form.validateFields();

    const sourceParmas = params.relativeType === EvluateRelativeTypeEnum.TASK ? {
      customerTaskRecordId: params.relativeId,
    } : {
      customerId: params.relativeId,
    };

    const data = {
      templateCode: params.templateCode,
      templateComposeCode: params.templateComposeCode,
      customerId: params.customerId,
      resultDataList: Object.entries(values).map(([key, value]) => {
        return value;
      }).filter(item => item),
      ...sourceParmas,
    };


    console.log('submitAddForm', data);
    return run(data);
  };

  const submitAddEvalute = async (values: any) => {
    const data = await submitAddForm();
    console.log('submitAddEvalute', data);
    const { recordMainId } = data;
    // history.push(`/elder/evaluation-report?recordMainId=${recordMainId}`);
    history.push(`/elder/evaluation-report?relativeId=${params.relativeId}&relativeType=${params.relativeType}&customerId=${params.customerId}`);

    //跳转评估结果页面
  };

//提交并返回
  const submitAddEvaluteGroupReturn = async (values: any) => {
    await submitAddForm();
    //如果是综合评估，返回到综合评估列表，如果是单项评估，
    history.replace(`/evaluate/add-of-composite/${templateComposeCode}?relativeId=${relativeId}&relativeType=${relativeType}&customerId=${customerId}`);
  };

  //提交并继续
  const submitAddEvaluteGroupContinue = async () => {
    const data = await submitAddForm();
    const { nextTemplateCode } = data || {};
    //如果是综合评估，返回到综合评估列表，如果是单项评估，if (nextTemplateCode) {
    history.replace(`/evaluate/add/${nextTemplateCode}?relativeId=${relativeId}&relativeType=${relativeType}&customerId=${customerId}&templateComposeCode=${templateComposeCode}`);


    //这里处理formconsole.log('submitAddFormContinue');
    // history.replace('/evaluate/add/next');
  };

  //返回按钮需要的两个方法
  return {
    submitAddEvaluteGroupReturn,
    submitAddEvaluteGroupContinue,
    submitAddEvalute,
  };
};

export default useSubmitAddForm;