import { useEffect, useState } from 'react';
import { Modal, Button, Divider, ConfigProvider } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import React from 'react';
import Medication from './Medication';
import Disease from './Disease';
// 弹窗类型
type ModalType = "view" | "create"
// 弹窗按钮类型
type ButtonType = "del" | "save" | "close"
// 需要先确定好数据结构，然后再进行组件的拆分
// 1.确定数据结构

const templeteDatdTmp = {
  name: {
    id: 1,
    type: 'INPUT',
    label: '输入框',
    name: 'input',
  },
  time: {
    id: 2,
    type: 'TEXTAREA',
    label: '文本域',
    name: 'textarea',
  },
};

const dataTmp = [
  // status 0 删除 1 查看 2 新增
  {
    id: 1,
    name: '疾病名称',
    time: '就医时间',
    hospital: '医院',
    department: '科室',
    doctor: '主治医师',
    accompany: '陪同人',
    status: 0
  },
  {
    id: 2,
    name: '疾病名称',
    time: '就医时间',
    hospital: '医院',
    department: '科室',
    doctor: '主治医师',
    accompany: '陪同人',
    status: 1
  },
  {
    id: 3,
    name: '疾病名称',
    time: '就医时间',
    hospital: '医院',
    department: '科室',
    doctor: '主治医师',
    accompany: '陪同人',
    status: 2
  },
  {
    id: 4,
    name: '疾病名称',
    time: '就医时间',
    hospital: '医院',
    department: '科室',
    doctor: '主治医师',
    accompany: '陪同人',
    status: 1
  }
];


const ETableForm = (props) => {
  // 面板卡弹窗表单
  const { data, onSubmit, disabled, title, type, children, templateData, setFormVisible, setData, open } = props;
  const handleClick = (btnType: ButtonType) => {
    if (disabled) return;
    //   参数校验
    if (btnType === "del") {
      // 获取数据
      // 调用接口删除
      // onSubmit(data);
      // 模拟列表数据移除
      const resData = data.filter((item, index) => index !== data.length - 1)
      setData(resData)
    }
    if (btnType === "save") {
      // 获取数据
      if (type === "create") {
        // 调用新增数据接口
        const res = {
          id: data[data.length - 1].id + 1,
          name: '疾病名称',
          time: '就医时间',
          hospital: '医院',
          department: '科室',
          doctor: '主治医师',
          accompany: '陪同人',
          status: 2
        }
        const resData = [...data, res]
        setData(resData)
      } else {
        // 不调用接口
      }
    }
    if (btnType === "close") {
      // 清空表单
    }
    // 执行弹窗关闭
    setFormVisible(false)
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

            <Button key="back" className="text-sm py-[14px] h-auto" type="primary" ghost onClick={() => handleClick("del")}>
              删除
            </Button>,
            <Button key="submit" className="text-sm py-[14px] h-auto" type="primary" onClick={() => handleClick("save")}>
              保存
            </Button>,
          ]}
          onCancel={() => handleClick("close")}
        >
          {children}
          {/* <div className="w-full h-[0px] border border-gray-D8"></div>
          <div className="mt-[10px]">
          </div> */}
        </Modal>
      </ConfigProvider>
    </>
  );
};

const ETable = (props) => {
  const { disabled = false } = props;
  const { value = dataTmp, onChange, templateData = templeteDatdTmp } = props;
  // value 是当前面板卡列表数据
  const [currentSelectData, setCurrentSelectData] = useState({});
  const [selectDataIndex, setSelectDataIndex] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
  const [ETableFormTitle, setETableFormTitle] = useState("")
  const [currentType, setCurrentType] = useState("")
  const [data, setData] = useState(dataTmp)
  useEffect(() => {
    console.log("出发了", data)
    setData(data)
  }, [data.length])
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


  const openETableForm = (data, type: ModalType) => {
    console.log(data)
    //...加载数据
    //...打开ETableForm
    // setFormVisible(true);
    // setCurrentSelectData({ data });
    // 设置弹窗表单标题
    setCurrentType(type)
    if (type === "create") {
      setETableFormTitle("主要疾病-03")
    } else {
      setETableFormTitle("当前用药情况-03")
      setCurrentSelectData({ ...data })
    }
    setFormVisible(true)
  };

  console.log('value', value);
  /**
   * 获取列表按钮文本辅助函数
   * @param status 列表按钮文本
   * @returns 
   */
  const getBtnText = (status: number) => {
    if (status === 1) {
      return "查看"
    }
    if (status === 2) {
      return "新增"
    }
  }
  return (
    <>
      {/* 面板选项卡表单 */}
      <ETableForm 
        open={formVisible} 
        defultValue={currentSelectData} 
        type={currentType} 
        title={ETableFormTitle} 
        disabled={disabled} 
        templateData={templateData} 
        children={currentType === "create" ? <Disease/> : <Medication/>}
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
                  openETableForm(item, "view");
                }}
                  className="w-60 h-[170px] px-5 pt-2.5 pb-5 bg-slate-50 rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div
                    className="w-[200px] text-zinc-600 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">{(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div
                    className="w-[200px] text-zinc-600 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">主要疾病的名称主要疾病的名称主要疾病的名称
                  </div>
                  <div
                    className="w-[200px] text-zinc-600 text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide">就医时间：2023年10月24日
                  </div>
                  <div
                    className="w-[200px] text-teal-500 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide">{
                      item.status === 1 ? "查看" : "编辑" 
                    }
                  </div>
                </div>
              )
            }
          })
        }

        {
          !disabled && (
            <div
              className=" border border-teal-500 flex-center flex-col bg-gray-F6 px-[20px] py-[10px] rounded-[20px] min-h-[170px]"
              onClick={() => {
                openETableForm({}, "create");
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
