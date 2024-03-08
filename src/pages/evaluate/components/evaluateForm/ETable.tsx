import { useEffect, useState } from 'react';
import { Modal, Button, Divider, ConfigProvider, Form } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import React from 'react';
import Medication from './Medication';
import Disease from './Disease';
import { ElementTypeEnum } from '@/enums/ElementTypeEnum';
import { ElementDataTypeEnum } from '@/enums/ElementDataTypeEnum';
import { EDateTime, EInput, ESelect } from '@/pages/evaluate/components/evaluateForm/component';
import ERadio from '@/pages/evaluate/components/evaluateForm/ERadio';
import ECheckBox from '@/pages/evaluate/components/evaluateForm/ECheckBox';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';
import { OptionDataType } from '@/pages/evaluate/components/evaluateForm/enums/OptionDataTypeEnum';
import { OptionDataTypeEnum } from './enums/OptionDataTypeEnum';
import { OptionControlTypeEnum } from './enums/OptionControlTypeEnum';
import { ElementRequireFlgEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementRequireFlgEnum';
// 弹窗类型
type ModalType = 'view' | 'create'
// 弹窗按钮类型
type ButtonType = 'del' | 'save' | 'close'
// 需要先确定好数据结构，然后再进行组件的拆分
// 1.确定数据结构

const { EDateTimePicker, ETimePicker } = EDateTime;
const { ETextArea } = EInput;
// 表单组件的基础结构
const FormItemBaseContainer = ({ item, form = {}, children, formItemProps = {} }) => {
  return (
    <div>
      <div
        className="w-[620px] font-semibold h-[30px] justify-start items-center gap-2.5 inline-flex mb-[10px]  text-black">
        {item.optionRequireFlg === ElementRequireFlgEnum.YES &&
          <div className="w-6 font-bold h-6 p-2.5  text-xl justify-center items-center gap-2.5 flex">
            ※
          </div>}

        <div className="justify-start items-center gap-2.5 flex">
          <div className="text-zinc-700 text-xl  font-['PingFang SC'] leading-[30px] font-bold">
            {item.optionName}
          </div>
        </div>
      </div>

      <div className="bg-white  rounded-[4px]">
        <div className="w-full ">
          <Form.Item name={item.id} noStyle {...formItemProps}>
            {children}
          </Form.Item>

        </div>
      </div>
    </div>
  );
};


const ETableForm = (props) => {
  const [form] = Form.useForm();
  // 面板卡弹窗表单
  const { data, onSubmit, disabled, title, type, defultValue, item, setFormVisible, setData, open } = props;
  const handleDeleteBtnClick = () => {
    // 删除数据
    // onSubmit(data);
    // 模拟列表数据移除
    const resData = data.filter((item, index) => index !== data.length - 1);
    setData(resData);
    setFormVisible(false);

  };
  const handleSaveBtnClick = () => {

    //没有数据的时候，直接新增一条数据
    if (Object.keys(defultValue).length === 0) {
      // 调用新增数据接口
      const res = {};
      const resData = [...data, res];
      setData(resData);
    }
    // 有数据的时候，直接修改数据
    else {
      //修改数据， 找到源数组中的这一条数据，并修改
      const resData = data.map((item, index) => {
        if (item.id === data[data.length - 1].id) {
          return {
            ...item,

          };
        }
        return item;
      });

      setData(resData);
    }

    // 执行弹窗关闭
    setFormVisible(false);
  };
  const handleCloseBtnClick = () => {
    // 清空表单
    setFormVisible(false);
  };


  const templateConfig = {
    [OptionControlTypeEnum.TEXT]: ({ optionDataType, ...item }: {
      elementDataType: ElementDataTypeEnum, [key: string]: any
    }, index) => {
      switch (optionDataType) {
        case OptionDataTypeEnum.NUMBER:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <EInput type="number" form={form} maxLength={item?.optionMaxLength}
                      placeHolder={item.optionPlaceholder} />
            </FormItemBaseContainer>
          );
        case OptionDataTypeEnum.TEXT:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <EInput type="text" form={form} maxLength={item?.elementMaxLength} />
            </FormItemBaseContainer>
          );
      }
    },
    [OptionControlTypeEnum.TEXTAREA]: (item, index) => {
      return (
        <FormItemBaseContainer item={item} index={index} form={form}>
          <ETextArea rows={4} form={form} maxLength={item?.elementMaxLength} />
        </FormItemBaseContainer>
      );
    },
    [OptionControlTypeEnum.SINGLE_SELECT]: (item, index) => {
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
    [OptionControlTypeEnum.MULTI_SELECT]: (item, index) => {
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

    [OptionControlTypeEnum.DATE]: ({ elementDataType, ...item }: {
      elementDataType: ElementDataTypeEnum, [key: string]: any
    }, index) => {
      switch (elementDataType) {
        case OptionDataTypeEnum.YEAR_MONTH_DAY:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <EDateTime />
            </FormItemBaseContainer>
          );

        case OptionDataTypeEnum.DATE_TIME:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <EDateTimePicker />
            </FormItemBaseContainer>
          );
        case OptionDataTypeEnum.HOUR_MINUTE:
          return (
            <FormItemBaseContainer item={item} index={index} form={form}>
              <ETimePicker />
            </FormItemBaseContainer>
          );
      }
    },
  };

  return (
    <>
      <ConfigProvider theme={{
        components: {
          Modal: {
            titleColor: '#323746',
          },
        },
      }}
      >
        <Modal
          open={open}
          title={title}
          closeIcon={<CloseCircleOutlined />}
          classNames={{
            footer: 'grid grid-cols-2 justify-between',
            header: 'text-white  text-xl font-semibold  leading-[30px]',
          }}
          footer={[

            <Button key="back" className="text-sm py-[14px] h-auto" type="primary" ghost
                    onClick={() => handleDeleteBtnClick()}>
              删除
            </Button>,
            <Button key="submit" className="text-sm py-[14px] h-auto" type="primary"
                    onClick={() => handleSaveBtnClick()}>
              保存
            </Button>,
          ]}
          onCancel={() => handleCloseBtnClick()}
        >
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
            {item?.optionList.map((item, index) => {
              return (
                <>
                  <div className="mt-[20px]" key={index}>{templateConfig[item.optionControlType]?.(item, index)}</div>
                </>
              );
            })}
          </ConfigProvider>
        </Modal>
      </ConfigProvider>
    </>
  );
};

const ETable = (props) => {
  const { disabled = false } = props;
  const { value, onChange, item = item, title } = props;
  // value 是当前面板卡列表数据
  const [currentSelectData, setCurrentSelectData] = useState({});
  const [selectDataIndex, setSelectDataIndex] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
  const [currentType, setCurrentType] = useState('');
  const [data, setData] = useState([]);

  //  点击查看按钮
  const handleClick = () => {
    //...加载数据
    //...打开ETableForm
    setCurrentSelectData({});
    setFormVisible(true);

  };

  const handleSubmit = (data) => {
    //...提交数据
    //...关闭ETableForm
    let newData = { ...value };
    //如果已经存在了selectDataIndex，就修改原数组，没有存在ID，证明是新增，需要追加在原数组后面,并递增selectDataIndex
    if (data.id) {


      //修改value数组
    }

    onChange(data.value);
  };


  const openETableForm = (item) => {
    setCurrentSelectData({ ...item });
    setFormVisible(true);
  };

  console.log('value', value);
  /**
   * 获取列表按钮文本辅助函数
   * @param status 列表按钮文本
   * @returns
   */
  const getBtnText = (status: number) => {
    if (status === 1) {
      return '查看';
    }
    if (status === 2) {
      return '新增';
    }
  };
  return (
    <>
      {/* 面板选项卡表单 */}
      <ETableForm
        open={formVisible}
        defultValue={currentSelectData}
        type={currentType}
        title={title}
        disabled={disabled}
        item={item}
        children={currentType === 'create' ? <Disease /> : <Medication />}
        setFormVisible={setFormVisible}
        setData={setData}
        data={data}
        onSubmit={handleSubmit}
      />
      {/* 面板选项列表数据 */}
      <div className="grid grid-cols-2 gap-[20px] items-center">
        {
          data.map((item, index) => {
            if (item.status !== 0) {
              return (
                <div
                  key={item.id} onClick={() => {
                  openETableForm({
                    ...item, index,
                  });
                }}
                  className="w-60 h-[170px] px-5 pt-2.5 pb-5 bg-slate-50 rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div
                    className="w-[200px] text-zinc-600 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">{(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div
                    className="w-[200px] text-zinc-600 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">{item.title}
                  </div>
                  <div
                    className="w-[200px] text-zinc-600 text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide">就医时间：2023年10月24日
                  </div>
                  <div
                    className="w-[200px] text-teal-500 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide">{
                    item.status === 1 ? '查看' : '编辑'
                  }
                  </div>
                </div>
              );
            }
          })
        }

        {
          !disabled && (
            <div
              className=" border border-teal-500 flex-center flex-col bg-gray-F6 px-[20px] py-[10px] rounded-[20px] min-h-[170px]"
              onClick={() => {
                openETableForm({});
              }}>

              <div>
                +
              </div>

              <div
                className="w-[200px] text-center text-zinc-600 text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide">如有新情况<br />点击可添加
              </div>

            </div>)
        }
      </div>
    </>
  );
};

export default ETable;
