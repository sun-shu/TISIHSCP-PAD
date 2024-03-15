import React, { useState } from 'react';
import { Modal, Button, Divider, ConfigProvider, Form } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { ElementRequireFlgEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementRequireFlgEnum';
import FormItemComponent from '@/pages/evaluate/components/evaluateForm/components/FormItemComponent';


const FormItemBaseContainer = ({ item, form = {}, children, formItemProps = {} }) => {
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
          <Form.Item name={item?.id} {...formItemProps} className="mb-0">
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
  const { data, disabled, title, defultValue, item, setFormVisible, setData, open } = props;
  const handleDeleteBtnClick = () => {
    // 删除数据
    // onSubmit(data);
    // 模拟列表数据移除
    const resData = data?.filter((item, index) => index !== data?.length - 1);
    setData(resData);
    setFormVisible(false);

  };
  const handleSaveBtnClick = async () => {

    const res = await form.validateFields();

    console.log('res', res, '====');
    //没有数据的时候，直接新增一条数据
    if (Object.keys(defultValue).length === 0) {
      // 调用新增数据接口
      const resData = [...data, res];
      setData(resData);
    }

    // 有数据的时候，直接修改数据
    else {
      //修改数据， 找到源数组中的这一条数据，并修改
      const resData = data?.map((item, index) => {
        if (item?.id === data[data?.length - 1].id) {
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

  const elementList = item?.optionList.map((item, index) => {
    console.log('item', item, '====');
    return {
      ...item,
      elementType: item?.optionControlType,
      elementDataType: item?.optionDataType,
      elementRequireFlg: item?.optionRequireFlg,
      elementName: item?.optionName,
      elementMaxLength: item?.optionMaxLength,
    };
  });

  console.log('elementList', elementList, '====');
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
          title={item?.elementName}

          closeIcon={<CloseCircleOutlined />}
          className=" max-h-[600px] bg-white  w-[600px]"
          classNames={{
            footer: 'grid grid-cols-2 justify-between',
            header: 'text-white  text-xl font-semibold  leading-[30px]',
            body: 'max-h-[600px] overflow-y-auto px-[24px]',
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
            <Form scrollToFirstError form={form} colon={false}
                  disabled={disabled}>
              <div className="px-[24px]">
                {elementList.map((item, index) => {
                  return (
                    <>
                      <FormItemComponent item={item} index={index} form={form}
                                         FormItemBaseContainer={FormItemBaseContainer}
                      />
                    </>
                  );
                })}
              </div>
            </Form>

          </ConfigProvider>
        </Modal>
      </ConfigProvider>
    </>
  );
};

const ETable = (props) => {
  const { disabled = false } = props;
  const { id, value, onChange, item = item, title } = props;
  // value 是当前面板卡列表数据
  const [currentSelectData, setCurrentSelectData] = useState({});
  const [formVisible, setFormVisible] = useState(false);
  const [data, setData] = useState([]);

  
  const openETableForm = (item) => {
    setCurrentSelectData({ ...item });
    setFormVisible(true);
  };

  //渲染前两个字段
  const renderAnswer = (answer) => {
    return;
  };

  console.log(data, 'TableData');
  /**
   * 获取列表按钮文本辅助函数
   * @param status 列表按钮文本
   * @returns
   */
  return (
    <>
      {/* 面板选项卡表单 */}
      <ETableForm
        open={formVisible}
        defultValue={currentSelectData}
        title={title}
        disabled={disabled}
        item={item}
        setFormVisible={setFormVisible}
        setData={setData}
        data={data}
      />
      {/* 面板选项列表数据 */}
      <div className="grid grid-cols-2 gap-[20px] items-center" id={id}>
        {
          data?.map((answer, index) => {
            if (item?.status !== 0) {
              return (
                <div
                  key={answer.id} onClick={() => {
                  openETableForm({
                    ...answer, index,
                  });
                }}
                  className="w-60 h-[170px] px-5 pt-2.5 pb-5 bg-slate-50 rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div
                    className="w-[200px] text-zinc-600 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">{(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div
                    className="w-[200px] text-zinc-600 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">
                    {item?.optionList[0]?.optionName}:{answer[0]?.answer}
                  </div>
                  <div
                    className="w-[200px] text-zinc-600 text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide">
                    {item?.optionList[1]?.optionName}:{answer[1]?.answer}
                  </div>
                  <div
                    className="w-[200px] text-teal-500 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide">{
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
