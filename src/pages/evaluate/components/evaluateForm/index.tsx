// TODO    这里要做的是 渲染元素表单，输入默认值和数据？还是ID（其实关系不大），不关心外界元素 只关心提交
import ECheckBox from '@/pages/evaluate/components/evaluateForm/ECheckBox';
import ERadio from '@/pages/evaluate/components/evaluateForm/ERadio';
import { ConfigProvider, Form } from 'antd';
import React from 'react';
import _ from "lodash"

import { EInput, ESelect, ETable } from './component';

const { ETextArea } = EInput;
// 剩余数据填充逻辑

// 表单组件的基础结构
const FormItemBaseContainer = ({ item, index, children }) => (
  <div>
    <div className="w-[620px] h-[30px] justify-start items-center gap-2.5 inline-flex mb-[10px]  text-black">
      <div className="w-6 h-6 p-2.5 font-bold text-[18px] justify-center items-center gap-2.5 flex">
        ※
      </div>

      <div className="justify-start items-center gap-2.5 flex">
        <div className="text-right text-zinc-700 text-xl font-normal font-['PingFang SC'] leading-[30px]">
          {index}
        </div>
        <div className="text-zinc-700 text-xl font-normal font-['PingFang SC'] leading-[30px]">
          单选-点选（建议选项≤4时使用）
        </div>
      </div>
    </div>
    <div className="px-[60px]  bg-white flex-center rounded-[4px]">
      <div className="w-full my-[20px]">
        <Form.Item name={item.name} noStyle>
          {children}
        </Form.Item>
      </div>
    </div>
  </div>
);
const EvaluateFormTemplates = ({ evaluateTemplate = [], initData, setEvaluateTemplate }) => {
//
  console.log(evaluateTemplate, "====");
  const onChange = (e) => {
    const resData = _.cloneDeep(initData)
    // 1 2为option A B效果隐藏
    if (e.target.value === 1 || e.target.value === 2) {
      const res1 = resData.filter((item, index) => index !== 3)
      setEvaluateTemplate(res1)
    }
    // 3 4效果增加
    if (e.target.value === 3 || e.target.value === 4) {
      setEvaluateTemplate([...evaluateTemplate, resData[2]])
    }
  }
  const templateConfig = {
    INPUT: (item, index) => {
      return (
        <FormItemBaseContainer item={item} index={index}>
          <EInput type="text" />
        </FormItemBaseContainer>
      );
    },
    TEXTAREA: (item, index) => {
      return (
        <FormItemBaseContainer item={item} index={index}>
          <ETextArea rows={4} />
        </FormItemBaseContainer>
      );
    },
    SINGLE_SELECT: (item, index) => {
      // 单选多选，点选下拉框
      return (
        <FormItemBaseContainer item={item} index={index}>
          {item.options.length > 4 ? <ESelect></ESelect> : <ERadio onChange={onChange}></ERadio>}
        </FormItemBaseContainer>
      );
    },
    MULTI_SELECT: (item, index) => {
      return (
        <FormItemBaseContainer item={item} index={index}>
          <ECheckBox />
        </FormItemBaseContainer>
      );
    },
    TABLE: (item, index) => {
      return (
        <FormItemBaseContainer item={item} index={index}>
          <ETable />
        </FormItemBaseContainer>
      );
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
        {evaluateTemplate.map((item, index) => {
          return (
            <div className="mt-[20px]" key={index}>{templateConfig[item.type]?.(item, index)}</div>
          );
        })}
      </ConfigProvider>
    </div>
  );
};

const evaluateFormComponent = ({ evaluateData = {}, defaultData = {} }) => {
  const [form] = Form.useForm();
  if (evaluateData) {
    console.log(evaluateData, "evaluateData")
  }
  const [evaluateTemplate, setEvaluateTemplate] = React.useState([
    {
      type: 'INPUT',
      label: '输入框',
      name: 'input',
    },
    {
      type: 'TEXTAREA',
      label: '文本域',
      name: 'textarea',
    },
    {
      type: 'SINGLE_SELECT',
      label: '下拉框',
      name: 'select',
      options: [
        {
          name: 'jack',
          label: 'Jack',
        },
        {
          name: 'lucy',
          label: 'Lucy',
        },
        {
          name: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          name: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ],
    },
    {
      type: 'MULTI_SELECT',
      label: '多选框',
      name: 'checkbox',
      options: [
        {
          label: 'jack',
          value: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ],
    },
    {
      type: 'SINGLE_SELECT',
      label: '单选框',
      name: 'radio',
      options: [
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
        {
          value: 'jack11',
          label: 'Jack1',
        },
      ],
    },
    {
      type: 'MULTI_SELECT',
      label: '单选框',
      name: 'radio',
      options: [
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
        {
          value: 'jack11',
          label: 'Jack1',
        },
      ],
    },
    {
      type: 'RADIO',
      label: '单选框',
      name: 'radio',
    },
    {
      type: 'CHECKBOX',
    },
    {
      type: 'TABLE',
    },
  ]);

  return (
    <div>
      <Form form={form} colon={false}>
        <EvaluateFormTemplates evaluateTemplate={evaluateTemplate} initData={evaluateTemplate} setEvaluateTemplate={setEvaluateTemplate} />
      </Form>
    </div>
  );
};
export default evaluateFormComponent;
