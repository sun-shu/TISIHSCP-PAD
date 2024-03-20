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
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

//常量


const useSubmitAddForm = (form: FormInstance, params, elementList) => {
  const { templateComposeCode, relativeType, relativeId, customerId, remaindIndex } = params;

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
    } : {};

    const initialValues = elementList?.reduce((acc, cur) => {
      acc[cur.id] = {
        ...cur,
        optionValues: cur.optionValues ? cur.optionValues.toString() : '',
        elementIsShow: ElementVisibleEnum.HIDE,
      };
      return acc;
    }, {});

    console.log('initialValues', elementList, initialValues, values);

    //PATCH： 这里是因为后端需要将没填写过的数据也带回去，所以需要额外打补丁，将原有的模板数据和已填写的数据进行合并
    const resultDataList = Object.entries({
      ...initialValues,
      ...values,
    }).map(([key, value]) => {
      return value;
    }).filter(item => item);

    const data = {
      ...params,
      resultDataList,
      ...sourceParmas,
    };


    console.log('submitAddForm', data);
    return run(data);
  };

  //单项评估-提交
  const submitAddEvalute = async (values: any) => {
    const data = await submitAddForm();
    console.log('submitAddEvalute', data);
    const { recordMainId } = data;
    history.push(`/elder/evaluation-report?recordMainId=${recordMainId}&customerId=${customerId}`);
  };

  //综合评估-提交并返回
  const submitAddEvaluteGroupReturn = async (values: any) => {
    const data = await submitAddForm();
    const { parentRecordMainId } = data;
    //综合评估，返回到综合评估列表
    history.replace(`/evaluate/add-of-composite/${customerId}/${templateComposeCode}?relativeId=${relativeId}&relativeType=${relativeType}&recordMainId=${parentRecordMainId}`);
  };

  //综合评估-提交并继续
  const submitAddEvaluteGroupContinue = async () => {
    const data = await submitAddForm();
    const { nextTemplateCode, parentRecordMainId } = data || {};

    const nextRemaindIndex: any = remaindIndex - 1;
    const queryParams = new URLSearchParams({
      relativeId: relativeId,
      relativeType: relativeType,
      customerId: customerId,
      templateComposeCode: templateComposeCode,
      remaindIndex: nextRemaindIndex,
      parentRecordMainId: parentRecordMainId,
    });

    history.replace(`/evaluate/add/${customerId}/${nextTemplateCode}?${queryParams}`);
  };

  //返回按钮需要的两个方法
  return {
    submitAddEvaluteGroupReturn,
    submitAddEvaluteGroupContinue,
    submitAddEvalute,
  };
};

export default useSubmitAddForm;