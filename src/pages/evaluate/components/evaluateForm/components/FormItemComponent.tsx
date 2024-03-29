//基础类
import React, { useEffect, useState } from 'react';

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
import { OptionTypeEnum } from '@/pages/evaluate/components/evaluateForm/enums/OptionTypeEnum';
import { c } from '@umijs/utils/compiled/tar';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

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

const FormItemBaseContainerDefault = ({
                                        item,
                                        children,
                                        formItemProps = {},
                                      }: FormItemBaseContainerProps) => {

  return (
    <div>
      <div
        className="w-[620px] font-semibold h-[30px] justify-start items-center gap-2.5 inline-flex mb-[10px]  text-black">
        {item?.elementRequireFlg === ElementRequireFlgEnum.YES &&
          <div className="w-6 font-bold h-6 p-2.5  text-xl justify-center items-center gap-2.5 flex">
            ※
          </div>}

        <div className="justify-start items-center gap-2.5 flex">
          <div className="text-right text-zinc-700 text-xl font-bold font-['PingFang SC'] leading-[30px]">
            {item?.elementNum?.toString().padStart(2, '0')}
          </div>
          <div className="text-zinc-700 text-xl  font-['PingFang SC'] leading-[30px] font-bold">
            {item?.elementName}
          </div>
        </div>
      </div>

      <div className="px-[60px]  bg-white flex-center rounded-[4px]">
        <div className="w-full my-[20px]">
          {/*preserve false防止字段隐藏后值依然遗留 */}
          <Form.Item name={item?.id} preserve={false} {...formItemProps} className="mb-0">
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
  commonFormItemProps?: any,
  changeElementVisible: (elementId: number, visible: ElementVisibleEnum) => void,
  FormItemBaseContainer: React.FC<FormItemBaseContainerProps>,
  disabled: boolean,
}

const FormItemComponent = ({
                             item: config,
                             form,
                             changeElementVisible = null,
                             commonFormItemProps = {},
                             FormItemBaseContainer = FormItemBaseContainerDefault,
                             disabled = false,
                           }: FormItemComponentProps) => {

  //PATCH by sunshu: 这里是给后端打的补丁，接口为了方便 需要elementId这个字段来做结果对应 2024-03-19
  const item = {
    ...config,
    elementId: config.id,
  };

  // 组出选项列表需要的数据
  const options = React.useMemo(() => (
    item?.optionList?.map((option) => ({
      label: option.optionName,
      value: option.id,
      ...option,
    }))
  ), [item?.optionList]);

  // 文本组件- 数字、文本
  const createTextComponent = ({ elementDataType, ...item }) => {
    const rules = [{
      validator: (rule, value = {}) => {
        if (item?.elementRequireFlg === ElementRequireFlgEnum.YES) {
          if (!value.answer) {
            return Promise.reject('必填项');
          }
        }
        //身份证号校验

        if (elementDataType === ElementDataTypeEnum.IDCARD) {
          if (value.answer && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value.answer)) {
            return Promise.reject('身份证号格式错误');
          }
        }

        if (elementDataType === ElementDataTypeEnum.PHONE) {
          if (value.answer && !/^1[3456789]\d{9}$/.test(value.answer)) {
            return Promise.reject('手机号格式错误');
          }
        }

        //数字校验

        return Promise.resolve();
      },
    }];

    const formItemProps = {
      ...commonFormItemProps,
      rules,
    };

    switch (elementDataType) {
      case ElementDataTypeEnum.NUMBER:
        return (
          <FormItemBaseContainer item={item} key={item?.id} form={form} formItemProps={formItemProps}
          >
            <EInput componentProps={{
              type: 'number',
            }} form={form} item={item} />
          </FormItemBaseContainer>
        );
      case ElementDataTypeEnum.TEXT:
        return (
          <FormItemBaseContainer item={item} key={item?.id} form={form} formItemProps={formItemProps}>
            <EInput type="text" form={form} item={item} />
          </FormItemBaseContainer>
        );
      case ElementDataTypeEnum.PHONE:
        return (
          <FormItemBaseContainer item={item} key={item?.id} form={form} formItemProps={formItemProps}>
            <EInput form={form} item={item} />
          </FormItemBaseContainer>
        );
      case ElementDataTypeEnum.IDCARD:
        return (
          <FormItemBaseContainer item={item} key={item?.id} form={form} formItemProps={formItemProps}>
            <EInput form={form} item={item} />
          </FormItemBaseContainer>
        );
    }
  };

  // 日期组件- 年月日、日期时间、时分
  const createDateComponent = ({ elementDataType, ...item }) => {
    const rules = [{
      validator: (rule, value = {}) => {
        if (item?.elementRequireFlg === ElementRequireFlgEnum.YES) {
          if (!value.answer) {
            return Promise.reject('必填项');
          }
        }
        //身份证号校验
        //数字校验

        return Promise.resolve();
      },
    }];

    const formItemProps = {
      ...commonFormItemProps,
      rules,
    };

    switch (elementDataType) {
      case ElementDataTypeEnum.YEAR_MONTH_DAY:
        return (
          <FormItemBaseContainer item={item} key={item?.id} form={form} formItemProps={formItemProps}>
            <EDateTime item={item} />
          </FormItemBaseContainer>
        );

      case ElementDataTypeEnum.DATE_TIME:
        return (
          <FormItemBaseContainer item={item} key={item?.id} form={form} formItemProps={formItemProps}>
            <EDateTimePicker item={item} />
          </FormItemBaseContainer>
        );

      case ElementDataTypeEnum.HOUR_MINUTE:
        return (
          <FormItemBaseContainer item={item} key={item?.id} form={form} formItemProps={formItemProps}>
            <ETimePicker item={item} />
          </FormItemBaseContainer>
        );
    }
  };

  // 文本域组件
  const createTextareaComponent = (item: TemplateElementResDTO) => {
    const rules = [{
      validator: (rule, value = {}) => {
        if (item?.elementRequireFlg === ElementRequireFlgEnum.YES) {
          if (!value.answer) {
            return Promise.reject('必填项');
          }
        }
        //身份证号校验
        //数字校验

        return Promise.resolve();
      },
    }];

    const formItemProps = {
      ...commonFormItemProps,
      rules,
    };

    return (
      <FormItemBaseContainer item={item} key={item?.id} form={form} formItemProps={formItemProps}>
        <ETextArea rows={4} form={form} item={item} />
      </FormItemBaseContainer>
    );
  };

  // 单选组件
  const createSingleSelectComponent = (item: TemplateElementResDTO) => {
    const rules = [
      {
        validator: (rule, value = {}) => {
          if (item?.elementRequireFlg === ElementRequireFlgEnum.YES) {
            if (!value.optionValues) {
              return Promise.reject('必填项');
            }
          }

          return Promise.resolve();
        },
      },
    ];

    const formItemProps = {
      ...commonFormItemProps,
      rules,
    };

    return (
      <FormItemBaseContainer item={item} key={item?.id} form={form} formItemProps={formItemProps}>
        {item?.optionList?.length > 4 ?
          <ESelect options={options} form={form} item={item} /> :
          <ERadio options={options} form={form} item={item} />}
      </FormItemBaseContainer>
    );
  };

  // 多选组件
  const createMultiSelectComponent = (item: TemplateElementResDTO) => {
    const rules = [
      {
        validator: (rule, value = {}) => {
          if (item?.elementRequireFlg === ElementRequireFlgEnum.YES) {
            if (!value.optionValues) {
              return Promise.reject('必填项');
            }
          }

          return Promise.resolve();
        },
      },
    ];

    const formItemProps = {
      rules,
      ...commonFormItemProps,
    };

    return (
      <FormItemBaseContainer item={item} form={form} formItemProps={formItemProps}>
        <ECheckBox form={form} item={item} options={options} />
      </FormItemBaseContainer>
    );
  };

  // 一级标题组件
  const createOneSectionComponent = (item: TemplateElementResDTO) => {

    return (
      <>
        <OneSection title={item?.elementName} />
      </>
    );
  };

  // 二级标题组件
  const createTwoSectionComponent = (item: TemplateElementResDTO) => {
    return (
      <TwoSection title={item?.elementName} />
    );
  };

  // 表格组件
  const createTableComponent = (item: TemplateElementResDTO) => {
    const rules = [
      {
        validator: (rule, value) => {
          if (item?.elementRequireFlg === ElementRequireFlgEnum.YES) {
            if (!(value?.bodyList?.length > 0)) {
              return Promise.reject('必填项');
            }
          }

          return Promise.resolve();
        },
      },
    ];

    const formItemProps = {
      ...commonFormItemProps,
      rules,
    };


    return (
      <FormItemBaseContainer item={item} key={item?.id} form={form} formItemProps={formItemProps}>
        <ETable form={form} item={item} disabled={disabled} />
      </FormItemBaseContainer>
    );
  };

  // 模板配置
  const templateConfig = {
    [ElementTypeEnum.TEXT]: (item) => createTextComponent(item),
    [ElementTypeEnum.TEXTAREA]: (item) => createTextareaComponent(item),
    [ElementTypeEnum.SINGLE_SELECT]: (item) => createSingleSelectComponent(item),
    [ElementTypeEnum.MULTI_SELECT]: (item) => createMultiSelectComponent(item),
    [ElementTypeEnum.ONE_SECTION]: (item) => createOneSectionComponent(item),
    [ElementTypeEnum.TWO_SECTION]: (item) => createTwoSectionComponent(item),
    [ElementTypeEnum.TABLE]: (item) => createTableComponent(item),
    [ElementTypeEnum.DATE]: (item) => createDateComponent(item),
    // ...
  };

  const shouldUpdate = (prevValue, curValue) => {
    if (item.conditions?.length > 0) {
      return item.conditions?.some((condition) => {
        const { elementId, optionId } = condition;
        return prevValue[elementId]?.optionValues !== curValue[elementId]?.optionValues;
      });
    }

    return false;
  };

  const [isShow, setIsShow] = useState(item.elementIsShow);

  useEffect(() => {
    changeElementVisible?.(item.id, isShow);
  }, [isShow]);

  return (
    <>
      <Form.Item noStyle shouldUpdate={shouldUpdate}>
        {
          ({ getFieldsValue }) => {
            // 展示的条件 ：{elementID: 1, optionId: 1}
            // 展示逻辑：有一个条件满足即展示
            if (item?.conditions?.length > 0) {
              const show = item.conditions?.some((condition) => {

                const { elementId, optionId } = condition;
                const relatedValues = getFieldsValue([elementId])[elementId]?.optionValues?.split(',');

                return relatedValues?.includes(optionId?.toString());
              });

              setIsShow(show ? ElementVisibleEnum.SHOW : ElementVisibleEnum.HIDE);

              const setElementVisible = async (elementId: number, elementIsShow: ElementVisibleEnum) => {
                const element = await form.getFieldValue(elementId);
                console.log('changeElementVisible element', element, item);

                if (elementIsShow === ElementVisibleEnum.SHOW) {
                  form.setFieldValue(elementId, {
                    ...item,
                    ...element,
                    elementIsShow,
                  });
                } else {
                  //  这里是为了提交时能够从表单中获取显隐状态，不需要进行二次合并
                  form.setFieldValue(elementId, {
                    ...item,
                    elementIsShow,
                  });
                }

              };

              // 设置表单的显隐值，用于提交时显隐数据的获取
              setElementVisible(item.id, show ? ElementVisibleEnum.SHOW : ElementVisibleEnum.HIDE);
            }

            return isShow !== ElementVisibleEnum.HIDE && (
              <div className="mt-[20px]" key={item?.id}>{templateConfig[item?.elementType]?.(item)}</div>);
          }
        }
      </Form.Item>
    </>
  );
};

export default React.memo(FormItemComponent);
