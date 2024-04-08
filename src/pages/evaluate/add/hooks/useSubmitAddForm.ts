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
import { useEffect, useState } from 'react';
import { TitleComponentArrConst } from '@/pages/evaluate/const/TitleComponentConst';

//常量


const useSubmitAddForm = (form: FormInstance, params, elementList) => {
  const { templateComposeCode, relativeType, relativeId, customerId, remaindIndex } = params;
  const [canSubmit, setCanSubmit] = useState(true);

  const { loading, run, data } = useRequest(addResult, {
    manual: true,
    onSuccess: (result, params) => {
      message.success('提交成功');
    },
  });

  useEffect(() => {
    setCanSubmit(true);
  }, [params.templateCode]);

  const submitAddForm = async () => {

    const values = await form.validateFields();

    setCanSubmit(false);

    const sourceParmas = params.relativeType === EvluateRelativeTypeEnum.TASK ? {
      customerTaskRecordId: params.relativeId,
    } : {};

    // 初始化数据 将表单元素设为隐藏，只有在表单元素有值的时候才会显示。是为了保证表单元素被隐藏时，展示的状态为隐藏，数据是初始化数据
    const initialValues = elementList?.reduce((acc, cur) => {
      // 标题组件采用其默认展示状态
      const initShowStatus = TitleComponentArrConst.includes(cur.elementType) ? cur.elementIsShow : ElementVisibleEnum.HIDE;

      acc[cur.id] = {
        ...cur,
        elementId: cur.id,
        optionValues: cur.optionValues ? cur.optionValues.toString() : '',
        elementIsShow: initShowStatus,
      };
      return acc;
    }, {});


    //PATCH： 这里是因为后端需要将没填写过的数据也带回去，所以需要额外打补丁，将原有的模板数据和已填写的数据进行合并
    const resultDataList = Object.entries({
      ...initialValues,
      ...values,
    }).map(([key, value]) => {
      return {
        elementId: value.id,
        ...value,
      };
    }).filter(item => item);

    const data = {
      ...params,
      resultDataList,
      ...sourceParmas,
    };

    return run(data);
  };

  //单项评估-提交
  const submitAddEvalute = async (values: any) => {
    const data = await submitAddForm();
    const { recordMainId } = data;
    history.push(`/elder/evaluation-report?recordMainId=${recordMainId}&customerId=${customerId}`);
  };

  //综合评估-提交并返回
  const submitAddEvaluteGroupReturn = async (values: any) => {
    const data = await submitAddForm();
    const { parentRecordMainId } = data;
    //综合评估，返回到综合评估列表
    history.replace(`/evaluate/add-and-view-of-composite/${customerId}/${templateComposeCode}?relativeId=${relativeId}&relativeType=${relativeType}&recordMainId=${parentRecordMainId}`);
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
    loading,
    canSubmit,
  };
};

export default useSubmitAddForm;