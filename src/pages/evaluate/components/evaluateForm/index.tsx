// TODO    这里要做的是 渲染元素表单，输入默认值和数据？还是ID（其实关系不大），不关心外界元素 只关心提交
import { ConfigProvider, Form } from 'antd';
import React from 'react';
import { EInput } from './component';

const { ETextArea } = EInput;
//  在这个层级判断 超过多少个用点选或者多选

const FormItemBaseContainer = ({ item, children }) => (
  <div>
    <div className="w-[620px] h-[30px] justify-start items-center gap-2.5 inline-flex mb-[10px]  text-black">
      <div className="w-6 h-6 p-2.5 font-bold text-[18px] justify-center items-center gap-2.5 flex">
        ※
      </div>

      <div className="justify-start items-center gap-2.5 flex">
        <div className="text-right text-zinc-700 text-xl font-normal font-['PingFang SC'] leading-[30px]">
          01
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
const EvaluateFormTemplates = ({ evaluateTemplate = [] }) => {
  console.log(evaluateTemplate, EInput);
  const templateConfig = {
    INPUT: (item) => {
      return (
        <FormItemBaseContainer item={item}>
          <EInput type="text" />
        </FormItemBaseContainer>
      );
    },
    TEXTAREA: (item) => {
      return (
        <FormItemBaseContainer item={item}>
          <ETextArea rows={4} />
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
            colorTextPlaceholder: '#5E5E5E',
            colorBgContainerDisabled: 'none',
          },
          components: {
            Input: {
              activeShadow: 'none',
              activeBorderColor: 'none',
              paddingInline: 10,
              paddingBlock: 2,
              fontSize: 18,
            },
            Select: {
              borderRadius: 4,
            },
          },
        }}
      >
        {evaluateTemplate.map((item) => {
          return (
            <div className="mt-[20px]">{templateConfig[item.type]?.(item)}</div>
          );
        })}
      </ConfigProvider>
    </div>
  );
};

const evaluateFormComponent = ({ evaluateData = {}, defaultData = {} }) => {
  const [form] = Form.useForm();

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
      type: 'SELECT',
      label: '下拉框',
      name: 'select',
    },
    {
      type: 'RADIO',
      label: '单选框',
      name: 'radio',
    },
    {
      type: 'CHECKBOX',
    },
  ]);

  return (
    <div>
      <Form form={form} colon={false}>
        <EvaluateFormTemplates evaluateTemplate={evaluateTemplate} />
      </Form>
    </div>
  );
};
export default evaluateFormComponent;
