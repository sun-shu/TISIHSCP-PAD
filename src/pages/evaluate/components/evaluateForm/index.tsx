// TODO    这里要做的是 渲染元素表单，输入默认值和数据？还是ID（其实关系不大），不关心外界元素 只关心提交
import ECheckBox from '@/pages/evaluate/components/evaluateForm/ECheckBox';
import ERadio from '@/pages/evaluate/components/evaluateForm/ERadio';
import { ConfigProvider, Form, Button } from 'antd';
import React, { useState } from 'react';
import _ from 'lodash';

import { EInput, ESelect, ETable } from './component';
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

const { ETextArea } = EInput;

// 剩余数据填充逻辑
const titleNum = 0;
// 表单组件的基础结构
const FormItemBaseContainer = ({ item, index, form = {}, children, formItemProps = {} }) => {
  return (
    <div>
      <div className="w-[620px] h-[30px] justify-start items-center gap-2.5 inline-flex mb-[10px]  text-black">
        <div className="w-6 h-6 p-2.5 font-bold text-[18px] justify-center items-center gap-2.5 flex">
          {item.elementRequireFlg === ElementRequireFlgEnum.YES && '※'}
        </div>

        <div className="justify-start items-center gap-2.5 flex">
          <div className="text-right text-zinc-700 text-xl font-normal font-['PingFang SC'] leading-[30px]">
            {/* { index < 5 ? <div>{ index + 1 }</div> : <div>{ titleNum + 1 }</div> } */}
            {index + 1}
          </div>
          <div className="text-zinc-700 text-xl font-normal font-['PingFang SC'] leading-[30px]">
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

const EvaluateFormTemplates = ({ elementList = [], initData, form = {}, setEvaluateTemplate }: {
  elementList: TemplateResDTO[]
}) => {
//
  console.log('elementList', elementList, '====');
  const location = useLocation();
  const onChange = (e) => {
    const resData = _.cloneDeep(initData);
    // 1 2为option A B效果隐藏
    if (e.target.value === 1 || e.target.value === 2) {
      const res = elementList.map((item, index) => {
        item.isShow = index !== 3;
        return item;
      });
      // const res1 = resData.filter((item, index) => index !== 3)
      setEvaluateTemplate(res);
    }
    // 3 4效果增加
    if (e.target.value === 3 || e.target.value === 4) {
      const res = elementList.map((item, index) => {
        item.isShow = true;
        return item;
      });
      setEvaluateTemplate(res);
      // setEvaluateTemplate([...elementList, resData[2]])
    }
  };

  const templateConfig = {
    [ElementTypeEnum.TEXT]: ({ elementDataType, ...item }: {
      elementDataType: ElementDataTypeEnum, [key: string]: any
    }, index) => {
      switch (elementDataType) {
        case ElementDataTypeEnum.NUMBER:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <EInput type="number" form={form} maxLength={item?.elementMaxLength} />
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
        optionType: option.optionType,
      }));
      return (
        <FormItemBaseContainer item={item} index={index} form={form}>

          {item.optionList.length > 4 ? <ESelect form={form} options={options} /> :
            <ERadio form={form} options={options}></ERadio>}
        </FormItemBaseContainer>
      );
    },
    [ElementTypeEnum.MULTI_SELECT]: (item, index) => {
      console.log('MULTI_SELECT item', item, '====');
      const options = item?.optionList.map((option) => ({
        label: option.optionName,
        value: option.id,
        optionType: option.optionType,
      }));
      return (
        <FormItemBaseContainer item={item} index={index} form={form} formItemProps={{ valuePropName: 'checked' }}>
          <ECheckBox form={form} options={options} />
        </FormItemBaseContainer>
      );
    },
    //
    // [ElementTypeEnum.TABLE]: (item, index) => {
    //   return (
    //     <FormItemBaseContainer item={item} index={index} form={form}>
    //       <ETable form={form} />
    //     </FormItemBaseContainer>
    //   );
    // },
    // [ElementTypeEnum.DATE]: ({ elementDataType, ...item }: {
    //   elementDataType: ElementDataTypeEnum, [key: string]: any
    // }, index) => {
    //   switch (elementDataType) {
    //     case ElementDataTypeEnum.YEAR_MONTH_DAY:
    //       return (
    //         <FormItemBaseContainer item={item} index={index} form={form}>
    //
    //         </FormItemBaseContainer>
    //       );
    //
    //     case ElementDataTypeEnum.DATE_TIME:
    //       return (
    //         <FormItemBaseContainer item={item} index={index} form={form}>
    //
    //         </FormItemBaseContainer>
    //       );
    //     case ElementDataTypeEnum.HOUR_MINUTE:
    //       return (
    //         <FormItemBaseContainer item={item} index={index} form={form}>
    //
    //         </FormItemBaseContainer>
    //       );
    //   }
    // },
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
        {elementList.map((item, index) => {
          return (
            <>
              {!item.elementIsShow ?
                <div className="mt-[20px]" key={index}>{templateConfig[item.elementType]?.(item, index)}</div> : <></>}
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


  console.log('evaluateTemplateData', evaluateTemplateData, '====');
  return (
    <div>
      <Form form={form} colon={false} initialValues={initialValues} disabled={disabled}>
        <EvaluateFormTemplates elementList={evaluateTemplateData.resDTO?.elementList}
        />
      </Form>
    </div>
  );
};
export default EvaluateFormComponent;
