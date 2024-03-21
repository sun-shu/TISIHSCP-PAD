import React, { useEffect, useState } from 'react';
import { Modal, Button, Divider, ConfigProvider, Form, Input, message } from 'antd';
import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ElementRequireFlgEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementRequireFlgEnum';
import FormItemComponent from '@/pages/evaluate/components/evaluateForm/components/FormItemComponent';


const FormItemBaseContainer = ({ item, index, children, formItemProps = {} }) => {
  return (
    <div>
      <div
        className="font-semibold h-[30px] justify-start items-center gap-2.5 inline-flex mb-[10px]  text-black">
        {item?.optionRequireFlg === ElementRequireFlgEnum.YES &&
          <div className="w-6 font-bold h-6 p-2.5  text-xl justify-center items-center gap-2.5 flex">
            ※
          </div>}

        <div className="justify-start items-center gap-2.5 flex">
          <div className="text-zinc-700 text-xl  font-['PingFang SC'] leading-[30px] font-bold">
            {item?.optionName}
          </div>
        </div>
      </div>

      <div className="bg-white  rounded-[4px]">
        <div className="w-full ">
          <Form.Item name={item?.index} {...formItemProps} className="mb-0">
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
  const {
    disabled,
    defultValue,
    item: config,
    setIsModalOpen,
    isModalOpen,
    value,
    onChange,
    currentSelectIndex,
  } = props;

  useEffect(() => {
    if (Object.keys(defultValue).length > 0) {
      form.setFieldsValue(defultValue);
    }
  }, [defultValue]);

  const closeModel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteBtnClick = () => {

    const resData = value?.filter((item, index) => index !== currentSelectIndex);
    onChange(resData);
    closeModel();
  };

  const handleSaveBtnClick = async () => {
    const res = await form.validateFields();

    const hasContent = Object.values(res).some(value => value?.answer || value?.optionValues);

    if (!hasContent) {
      message.error('表单不能为空');
      return;
    }

    //没有数据的时候，直接新增一条数据
    if (defultValue.length === 0) {
      // 调用新增数据接口
      const resData = [...value, Object.entries(res).map(([key, value]) => {
        return value;
      }).filter(item => item)];
      onChange(resData);
    }

    // 有数据的时候，直接修改数据
    else {
      //修改数据， 找到源数组中的这一条数据，并修改
      const resData = value?.map((item, index) => {

        if (index === currentSelectIndex) {
          return [
            ...Object.entries(res).map(([key, value]) => {
              return value;
            }).filter(item => item),
          ];
        }
        return item;
      });

      onChange(resData);
    }

    closeModel();
  };

  // TODO by sunshu 这里需要保持表格题目表单的顺序
  const elementList = config?.optionList.map((item, index) => {
    return {
      ...item,
      id: item?.id.toString(),
      elementType: item?.optionControlType,
      elementDataType: item?.optionDataType,
      elementRequireFlg: item?.optionRequireFlg,
      elementName: item?.optionName,
      elementMaxLength: item?.optionMaxLength,
    };
  });

  return (
    <>
      <ConfigProvider theme={{
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
          Modal: {
            titleColor: '#323746',
          },
          Select: {
            borderRadius: 4,
          },
        },
      }}
      >
        <Modal
          open={isModalOpen}
          title={config?.elementName}
          closeIcon={<CloseCircleOutlined />}
          className=" bg-white  w-[600px] pb-0"
          destroyOnClose={true}
          classNames={{
            footer: 'grid grid-cols-2 justify-between',
            header: 'text-white  text-xl font-semibold  leading-[30px]',
            body: 'max-h-[600px] overflow-y-auto mb-[40px]',
          }}
          footer={[
            <Button key="back" className="text-sm py-[14px] h-auto" type="primary" ghost
                    onClick={() => handleDeleteBtnClick()} disabled={disabled}>
              删除
            </Button>,
            <Button key="submit" className="text-sm py-[14px] h-auto" type="primary"
                    onClick={() => handleSaveBtnClick()} disabled={disabled}>
              保存
            </Button>,
          ]}
          onCancel={closeModel}
        >
          <Form scrollToFirstError form={form} colon={false}
                disabled={disabled} preserve={false}>
            <div className="px-[24px]">
              {elementList.map((item, index) => {
                return (
                  <div key={item.id}>
                    <FormItemComponent item={{
                      ...item, index: index,
                    }} index={index} form={form}
                                       commonFormItemProps={{ initialValue: item }}
                                       FormItemBaseContainer={FormItemBaseContainer}
                    />
                  </div>
                );
              })}
            </div>
          </Form>
        </Modal>
      </ConfigProvider>
    </>
  );
};

interface ETableProps {
  id: string;   //ID：用于错误回滚定位
  value: any; //当前面板卡列表数据
  onChange: (value: any) => void;
  item: any;  //模板数据内容 element
  title: string;  //面板卡标题
  disabled?: boolean;  //是否禁用

  [propsName: string]: any;
}

interface ETableProps {
  id: string;
  value: any;
  onChange: (value: any) => void;
  item: any;
  title: string;
  disabled?: boolean;

  [propsName: string]: any;
}

const ETable = (props: ETableProps) => {
  const { disabled = false } = props;
  const { id, value = {}, onChange, item: config } = props;

  const { bodyList = [], headList = [] } = value;

  // 当前选中的数据 用于弹窗表单默认值
  const [currentSelectData, setCurrentSelectData] = useState([]);
  const [currentSelectIndex, setCurrentSelectIndex] = useState([]);

  // 弹窗表单是否显示
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    !isModalOpen && setCurrentSelectData([]);
  }, [isModalOpen]);

  const openETableForm = (item = [], index) => {
    setCurrentSelectData(item);
    setCurrentSelectIndex(index);

    setIsModalOpen(true);
  };

  const handleChange = (newValue) => {
    onChange({
      ...config,
      ...value,
      bodyList: newValue,
      headList: config.optionList,
    });
  };

  return (
    <>
      {/* 面板选项卡表单 */}
      <ETableForm
        isModalOpen={isModalOpen}
        defultValue={isModalOpen ? currentSelectData : {}}
        disabled={disabled}
        item={config}
        setIsModalOpen={setIsModalOpen}
        onChange={handleChange}
        value={bodyList}
        setCurrentSelectData={setCurrentSelectData}
        currentSelectIndex={currentSelectIndex}
      />
      <div className="grid grid-cols-2 gap-[20px] items-center" id={id}>
        {
          bodyList?.map((answer, index) => {
            if (config?.status !== 0) {
              return (
                <div
                  key={answer.id} onClick={() => {
                  openETableForm([...answer], index);
                }}
                  className="w-60 h-[170px] px-5 pt-2.5 pb-5 bg-slate-50 rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex relative">
                  <div
                    className="w-[200px] text-zinc-600 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">{(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div
                    className="w-[200px] text-zinc-600 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide line-clamp-2">
                    {config?.optionList[0]?.optionName}:{answer[0]?.answer}
                  </div>
                  <div
                    className="w-[200px] text-zinc-600 text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide line-clamp-1">

                    {config?.optionList[1]?.optionName}:{answer[1]?.answer}
                  </div>
                  <div
                    className="w-[200px] text-teal-500 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide absolute bottom-[15px]">{
                    answer.status === 1 ? '查看' : '编辑'
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
                openETableForm([], bodyList.length + 1);
              }}>

              <div>
                <PlusOutlined style={{
                  color: '#00ADB8',
                }} />
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
