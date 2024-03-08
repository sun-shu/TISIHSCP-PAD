// TODO    这里要做的是 渲染元素表单，输入默认值和数据？还是ID（其实关系不大），不关心外界元素 只关心提交
import ECheckBox from '@/pages/evaluate/components/evaluateForm/ECheckBox';
import ERadio from '@/pages/evaluate/components/evaluateForm/ERadio';
import { ConfigProvider, Form, Button, FormInstance } from 'antd';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import { EInput, ESelect, ETable, EDateTime, ETitle } from './component';
import { useRequest, useLocation, history } from 'umi';
import { ElementTypeEnum } from '@/enums/ElementTypeEnum';
import { ElementDataTypeEnum } from '@/enums/ElementDataTypeEnum';
import {
  CustomerComposeInfoResDTO, getCustomerComposeInfo, GetCustomerComposeInfoRequest,
  getEvaluateTemplateData,
  TemplateDataResultDTO,
  TemplateResDTO,
} from '@/api/evaluateTemplate';
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';
import { ElementRequireFlgEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementRequireFlgEnum';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';
import ProgressBar from '@/components/ProgressBar';

const { EDateTimePicker, ETimePicker } = EDateTime;
const { ETextArea } = EInput;
const { OneSection, TwoSection } = ETitle;

// 表单组件的基础结构
const FormItemBaseContainer = ({ item, form = {}, children, formItemProps = {} }) => {
  return (
    <div>
      <div
        className="w-[620px] font-semibold h-[30px] justify-start items-center gap-2.5 inline-flex mb-[10px]  text-black">
        {item.elementRequireFlg === ElementRequireFlgEnum.YES &&
          <div className="w-6 font-bold h-6 p-2.5  text-xl justify-center items-center gap-2.5 flex">
            ※
          </div>}

        <div className="justify-start items-center gap-2.5 flex">
          <div className="text-right text-zinc-700 text-xl font-bold font-['PingFang SC'] leading-[30px]">
            {item.elementNum?.toString().padStart(2, '0')}
          </div>
          <div className="text-zinc-700 text-xl  font-['PingFang SC'] leading-[30px] font-bold">
            {item.elementName}
          </div>
        </div>
      </div>

      <div className="px-[60px]  bg-white flex-center rounded-[4px]">
        <div className="w-full my-[20px]">
          <Form.Item name={item.id} noStyle {...formItemProps}>
            {children}
          </Form.Item>

        </div>
      </div>
    </div>
  );
};
const EvaluateFormTemplates = ({ elementList: initElementList = [], form = {} }: {
  elementList: TemplateResDTO[]
  form: FormInstance<any>
}) => {

  const [elementList, setElementList] = useState(_.cloneDeep(initElementList));

  console.log(initElementList, 'initElementList');

  useEffect(() => {
    const newElementList = calculateTitleNum(elementList);
    setElementList(newElementList);

  }, []);

  //计算序号逻辑，遇到标题，序号就重新计算
  //更新显示的题目和进度
  const calculateTitleNum = (elementList: TemplateResDTO[]) => {
    const titleType = [ElementTypeEnum.ONE_SECTION, ElementTypeEnum.TWO_SECTION];
    let elementIndex = 0;

    return elementList.map((item) => {
      // 如果当前元素是标题类型，则重置索引
      if (titleType.includes(item.elementType)) {
        elementIndex = 0;
      }
      // 如果当前元素是显示状态且不是标题类型，则增加索引
      else if (item.elementIsShow === ElementVisibleEnum.SHOW) {
        elementIndex++;
      }

      const elementNum = titleType.includes(item.elementType) ? 0 : elementIndex;

      return {
        ...item,
        elementNum,
      };
    });
  };


  //显示隐藏逻辑
  const changeElementVisible = (elementId: number, visible: boolean) => {
    console.log('changeElementVisible', elementId, visible);

    const visibleElementList =
      elementList.map((item) => ({
        ...item,
        elementIsShow: item.id === elementId ? visible : item.elementIsShow,
      }));
    const newElementList = calculateTitleNum(visibleElementList);

    // 使用解构赋值和条件判断来简化映射操作
    setElementList(newElementList);
  };


  const templateConfig = {
    [ElementTypeEnum.TEXT]: ({ elementDataType, ...item }: {
      elementDataType: ElementDataTypeEnum, [key: string]: any
    }, index) => {
      switch (elementDataType) {
        case ElementDataTypeEnum.NUMBER:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <EInput type="number" form={form} maxLength={item?.elementMaxLength}
                      placeHolder={item.elementPlaceholder} />
            </FormItemBaseContainer>
          );
        case ElementDataTypeEnum.TEXT:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <EInput type="text" form={form} maxLength={item?.elementMaxLength} />
            </FormItemBaseContainer>
          );
      }
    },
    [ElementTypeEnum.TEXTAREA]: (item, index) => {
      return (
        <FormItemBaseContainer item={item} index={index} form={form}>
          <ETextArea rows={4} form={form} maxLength={item?.elementMaxLength} />
        </FormItemBaseContainer>
      );
    },
    [ElementTypeEnum.SINGLE_SELECT]: (item, index) => {
      console.log('item', item, '====');
      // 单选多选，点选下拉框
      const options = item?.optionList.map((option) => ({
        label: option.optionName,
        value: option.id,
        ...option,
      }));
      return (
        <FormItemBaseContainer item={item} index={index} form={form}>

          {item.optionList.length > 4 ?
            <ESelect form={form} options={options} changeElementVisible={changeElementVisible} /> :
            <ERadio form={form} options={options} changeElementVisible={changeElementVisible}></ERadio>}
        </FormItemBaseContainer>
      );
    },
    [ElementTypeEnum.MULTI_SELECT]: (item, index) => {
      console.log('MULTI_SELECT item', item, '====');
      const options = item?.optionList.map((option) => ({
        label: option.optionName,
        value: option.id,
        ...option,
      }));
      return (
        <FormItemBaseContainer item={item} index={index} form={form} formItemProps={{ valuePropName: 'checked' }}>
          <ECheckBox form={form} options={options} changeElementVisible={changeElementVisible} />
        </FormItemBaseContainer>
      );
    },
    [ElementTypeEnum.ONE_SECTION]: (item, index) => {
      return (
        <>
          <OneSection title={item.elementName} />
        </>
      );
    },
    [ElementTypeEnum.TWO_SECTION]: (item, index) => {
      return (
        <TwoSection title={item.elementName} />
      );
    },
    [ElementTypeEnum.TABLE]: (item, index) => {
      return (
        <FormItemBaseContainer item={item} index={index} form={form} title={item.elementName}>
          <ETable form={form} item={item} />
        </FormItemBaseContainer>
      );
    },
    [ElementTypeEnum.DATE]: ({ elementDataType, ...item }: {
      elementDataType: ElementDataTypeEnum, [key: string]: any
    }, index) => {
      switch (elementDataType) {
        case ElementDataTypeEnum.YEAR_MONTH_DAY:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <EDateTime />
            </FormItemBaseContainer>
          );

        case ElementDataTypeEnum.DATE_TIME:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <EDateTimePicker />
            </FormItemBaseContainer>
          );
        case ElementDataTypeEnum.HOUR_MINUTE:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <ETimePicker />
            </FormItemBaseContainer>
          );
      }
    },
  };

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
        {elementList.filter(item => item.elementIsShow === ElementVisibleEnum.SHOW).map((item, index) => {
          return (
            <>
              <div className="mt-[20px]" key={index}>{templateConfig[item.elementType]?.(item, index)}</div>
            </>
          );
        })}
      </ConfigProvider>

    </div>
  );
};

// form在外面操作，这里是纯表单
const EvaluateFormComponent = ({ form, initialValues, disabled, templateCode }: {
  templateCode: string;
  [key: string]: any;
}) => {
  const [fillCount, setFillCount] = useState(0);
  const [needFillCount, setNeedFillCount] = useState(0);

  const { data: evaluateTemplateData = {}, error, loading, run }: {
    data: TemplateDataResultDTO;
    error: any;
    loading: boolean;
    run: any;
  } = useRequest(() => getEvaluateTemplateData({
    templateCode,
  }), {
    ready: !!templateCode,
    onSuccess: (result, params) => {
      console.log('result', result);
    },
  });

  return (
    <div>
      <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide pt-[10px]">
        已完成 {fillCount} / {needFillCount}
      </div>
      <ProgressBar processRate={fillCount / needFillCount} />
      <div className="text-right border-b-[1px] py-[10px]">※ 为必填项</div>
      <Form form={form} colon={false} initialValues={initialValues} disabled={disabled}>
        {evaluateTemplateData.resDTO?.elementList &&
          <EvaluateFormTemplates elementList={evaluateTemplateData.resDTO?.elementList} form={form}
                                 setFillCount={setFillCount} setNeedFillCount={setNeedFillCount}
          />}
      </Form>
    </div>
  );
};
export default EvaluateFormComponent;
