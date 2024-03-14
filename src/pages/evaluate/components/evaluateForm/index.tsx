//基础类
import React, { useEffect, useState } from 'react';

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
import _ from 'lodash';

//常量


interface EvaluateFormTemplatesProps {
  setElementList: (elementList: TemplateResDTO[]) => void;
  elementList: TemplateResDTO[];
  form: FormInstance<any>;
}

const EvaluateFormTemplates = (props: EvaluateFormTemplatesProps) => {
  const { elementList = [], form } = props;
  const { setElementList } = props;

  const { changeElementVisible } = useQuestionCalculate(elementList, setElementList);

//  PS by sunshu：这里使用elementList.map的原因是操作同一份数据，如果使用UseMemo，会导致重新渲染(计算验证进度和多选状态)
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
        {
          // patch：后端暂时没有清洗数据，elementIsShow没有值，所以需要做一下反向判断
          elementList.map((item, index) => {
            return (
              <>
                {item.elementIsShow !== ElementVisibleEnum.HIDE &&
                  <FormItemComponent item={item} index={index} form={form}
                                     changeElementVisible={changeElementVisible} />}
              </>
            );
          })}
      </ConfigProvider>

    </div>
  );
};

const EvaluateFormComponent = ({
                                 form,
                                 initialValues,
                                 disabled,
                                 templateCode,
                                 elementList: initElementList,
                                 templateName,
                               }: {
  templateCode: string;
  [key: string]: any;
}) => {
  //因为这里会有显隐变化，所以数据单独存储
  const [elementList, setElementList] = useState(_.cloneDeep(initElementList));


  const { fillCount, needFillCount, onFieldsChange, onValuesChange } = useProgressShow(form, initialValues);


  return (
    <div>
      <div className="text-[28px] font-semibold leading-10  bg-gray-F6 w-full">
        {templateName}
      </div>

      <div
        className="mb-[5px] text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide pt-[10px]">
        已完成 {fillCount} / {needFillCount}
      </div>
      <ProgressBar processRate={fillCount / needFillCount * 100} />
      <div className="text-right border-b-[1px] py-[10px]">※ 为必填项</div>
      <Form scrollToFirstError form={form} colon={false}
            disabled={disabled} onFieldsChange={onFieldsChange} onValuesChange={onValuesChange}>
        {elementList &&
          <EvaluateFormTemplates elementList={elementList} form={form}
                                 setElementList={setElementList} />
        }
      </Form>
    </div>

  );
};

export default EvaluateFormComponent;
