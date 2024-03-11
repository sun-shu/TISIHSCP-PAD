//基础类
import React from 'react';

//类型定义
import { ElementTypeEnum } from '@/enums/ElementTypeEnum';
import { ElementDataTypeEnum } from '@/enums/ElementDataTypeEnum';
import { ElementRequireFlgEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementRequireFlgEnum';
import { TemplateElementResDTO } from '@/api/evaluateTemplate/seeTemplateData.interface';

//接口

//组件
import {
  ECheckBox,
  EDateTime,
  EInput,
  ERadio,
  ESelect,
  ETable, ETitle,
} from '@/pages/evaluate/components/evaluateForm/components/index';
import { Form } from 'antd';

const { EDateTimePicker, ETimePicker } = EDateTime;
const { ETextArea } = EInput;
const { OneSection, TwoSection } = ETitle;

//hooks
//样式
//工具
//常量


// 表单组件的基础结构
interface FormItemBaseContainerProps {
  item: TemplateElementResDTO,
  form: any,
  children: React.ReactNode,
  formItemProps?: any,
}

const FormItemBaseContainer = ({ item, form = {}, children, formItemProps = {} }: FormItemBaseContainerProps) => {
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
          <Form.Item name={item.id} noStyle {...formItemProps}
                     rules={item.elementRequireFlg === ElementRequireFlgEnum.YES ? [{
                       required: true,
                       message: '必填项',
                     }] : []
                     }>
            {children}
          </Form.Item>

        </div>
      </div>
    </div>
  );
};


interface FormItemComponentProps {
  item: TemplateElementResDTO,
  index: number,
  form: any,
  changeElementVisible: (elementId: number, visible: boolean) => void
}

const FormItemComponent = ({ item, index, form, changeElementVisible }: FormItemComponentProps) => {
  const options = React.useMemo(() => (
    item.optionList?.map((option) => ({
      label: option.optionName,
      value: option.id,
      ...option,
    }))
  ), [item.optionList]);

  // 文本组件- 数字、文本
  const createTextComponent = ({ elementDataType, ...item }, index) => {
    const rules = [];

    const formItemProps = {
      rules,
    };

    switch (elementDataType) {
      case ElementDataTypeEnum.NUMBER:
        return (
          <FormItemBaseContainer item={item} key={index} form={form} formItemProps={formItemProps}>
            <EInput type="number" form={form} maxLength={item?.elementMaxLength}
                    placeHolder={item.elementPlaceholder} />
          </FormItemBaseContainer>
        );
      case ElementDataTypeEnum.TEXT:
        return (
          <FormItemBaseContainer item={item} key={index} form={form}>
            <EInput type="text" form={form} maxLength={item?.elementMaxLength} />
          </FormItemBaseContainer>
        );
    }
  };

  // 日期组件- 年月日、日期时间、时分
  const createDateComponent = ({ elementDataType, ...item }, index) => {
    switch (elementDataType) {
      case ElementDataTypeEnum.YEAR_MONTH_DAY:
        const DateTimeElement = EDateTime; // 引入对应组件
        return (
          <FormItemBaseContainer item={item} key={index} form={form}>
            <DateTimeElement />
          </FormItemBaseContainer>
        );

      case ElementDataTypeEnum.DATE_TIME:
        const DateTimePickerElement = EDateTimePicker;
        return (
          <FormItemBaseContainer item={item} key={index} form={form}>
            <DateTimePickerElement />
          </FormItemBaseContainer>
        );

      case ElementDataTypeEnum.HOUR_MINUTE:
        const TimePickerElement = ETimePicker;
        return (
          <FormItemBaseContainer item={item} key={index} form={form}>
            <TimePickerElement />
          </FormItemBaseContainer>
        );
    }
  };

  // 文本域组件
  const createTextareaComponent = (item: TemplateElementResDTO, index) => {
    return (
      <FormItemBaseContainer item={item} key={index} form={form}>
        <ETextArea rows={4} form={form} maxLength={item?.elementMaxLength} />
      </FormItemBaseContainer>
    );
  };

  // 单选组件
  const createSingleSelectComponent = (item: TemplateElementResDTO, index) => {
    return (
      <FormItemBaseContainer item={item} key={index} form={form}>

        {item.optionList.length > 4 ?
          <ESelect form={form} options={options} changeElementVisible={changeElementVisible} /> :
          <ERadio form={form} options={options} changeElementVisible={changeElementVisible}></ERadio>}
      </FormItemBaseContainer>
    );
  };

  // 多选组件
  const createMultiSelectComponent = (item: TemplateElementResDTO, index) => {
    return (
      <FormItemBaseContainer item={item} key={index} form={form} formItemProps={{ valuePropName: 'checked' }}>
        <ECheckBox form={form} options={options} changeElementVisible={changeElementVisible} />
      </FormItemBaseContainer>
    );
  };

  // 一级标题组件
  const createOneSectionComponent = (item: TemplateElementResDTO, index) => {
    return (
      <>
        <OneSection title={item.elementName} />
      </>
    );
  };

  // 二级标题组件
  const createTwoSectionComponent = (item: TemplateElementResDTO, index) => {
    return (
      <TwoSection title={item.elementName} />
    );
  };

  // 表格组件
  const createTableComponent = (item: TemplateElementResDTO, index) => {
    return (
      <FormItemBaseContainer item={item} key={index} form={form} title={item.elementName}>
        <ETable form={form} item={item} />
      </FormItemBaseContainer>
    );
  };

  // 模板配置
  const templateConfig = {
    [ElementTypeEnum.TEXT]: (item, index) => createTextComponent(item, index),
    [ElementTypeEnum.TEXTAREA]: (item, index) => createTextareaComponent(item, index),
    [ElementTypeEnum.SINGLE_SELECT]: (item, index) => createSingleSelectComponent(item, index),
    [ElementTypeEnum.MULTI_SELECT]: (item, index) => createMultiSelectComponent(item, index),
    [ElementTypeEnum.ONE_SECTION]: (item, index) => createOneSectionComponent(item, index),
    [ElementTypeEnum.TWO_SECTION]: (item, index) => createTwoSectionComponent(item, index),
    [ElementTypeEnum.TABLE]: (item, index) => createTableComponent(item, index),
    [ElementTypeEnum.DATE]: (item, index) => createDateComponent(item, index),
    // ...
  };

  return (
    <>
      <div className="mt-[20px]" key={index}>{templateConfig[item.elementType]?.(item, index)}</div>
    </>
  );
};

export default FormItemComponent;