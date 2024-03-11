//基础类
import React, { useState } from 'react';

//类型定义/枚举
import { FormInstance } from 'antd';
import { TemplateResDTO } from '@/api/evaluateTemplate/seeTemplateData.interface';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

//接口

//组件
import { ConfigProvider, Form, Skeleton } from 'antd';
import ProgressBar from '@/components/ProgressBar';
import FormItemComponent from '@/pages/evaluate/components/evaluateForm/components/FormItemComponent';

//hooks
import useLoadFormTemplateData from './hooks/useLoadFormTemplateData';
import useProgressShow from './hooks/useProgressShow';
import useQuestionCalculate from '@/pages/evaluate/components/evaluateForm/hooks/useQuestionCalculate';

//样式
//工具
//常量


interface EvaluateFormTemplatesProps {
  setElementList: (elementList: TemplateResDTO[]) => void;
  elementList: TemplateResDTO[];
  form: FormInstance<any>;
}

const EvaluateFormTemplates = (props: EvaluateFormTemplatesProps) => {
  const { elementList = [], form } = props;
  const { setElementList } = props;

  // 使用 useMemo 记住过滤后的表单元素列表
  const filteredElementList = React.useMemo(() => {
    return elementList.filter(item => item.elementIsShow === ElementVisibleEnum.SHOW);
  }, [elementList]);

  const { changeElementVisible } = useQuestionCalculate(elementList, setElementList);


  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorBorder: '#5E5E5E',
            colorText: '#5E5E5E',
            borderRadius: 4,
            fontSize: 18,
            colorTextPlaceholder: '#5E5E5E',
            colorBgContainerDisabled: 'none',
          },
          components: {
            Input: {
              activeShadow: 'none',
              activeBorderColor: 'none',
              paddingInline: 10,
              paddingBlock: 2,
            },
            Select: {
              borderRadius: 4,
            },
          },
        }}
      >
        {filteredElementList.map((item, index) => {
          return (
            <>
              <FormItemComponent item={item} index={index} form={form} changeElementVisible={changeElementVisible} />
            </>
          );
        })}
      </ConfigProvider>

    </div>
  );
};

// 纯表单
const EvaluateFormComponent = ({ form, initialValues, disabled, templateCode }: {
  templateCode: string;
  [key: string]: any;
}) => {
  //因为这里会有显隐变化，所以数据单独存储
  const [elementList, setElementList] = useState([]);

  const { loading, templateName } = useLoadFormTemplateData(templateCode, form, setElementList);

  const { fillCount, needFillCount } = useProgressShow();
  const onFieldsChange = (changedFields, allFields) => {
    console.log('onFieldsChange', changedFields, allFields);
  };

  return (

    <Skeleton loading={loading}>
      <div className="text-[28px] font-semibold leading-10  bg-gray-F6 w-full">
        {templateName}
      </div>

      <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide pt-[10px]">
        已完成 {fillCount} / {needFillCount}
      </div>
      <ProgressBar processRate={fillCount / needFillCount} />
      <div className="text-right border-b-[1px] py-[10px]">※ 为必填项</div>
      <Form form={form} colon={false} initialValues={initialValues} disabled={disabled} onFieldsChange={onFieldsChange}>
        {elementList &&
          <EvaluateFormTemplates elementList={elementList} form={form}
                                 setElementList={setElementList}
          />}
      </Form>
    </Skeleton>
  );
};

export default EvaluateFormComponent;
