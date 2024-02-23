import { useState } from 'react';
import { Modal, Button, Divider, ConfigProvider } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
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
  {
    id: 1,
    name: '疾病名称',
    time: '就医时间',
    hospital: '医院',
    department: '科室',
    doctor: '主治医师',
    accompany: '陪同人',
  },
  {
    id: 2,
    name: '疾病名称',
    time: '就医时间',
    hospital: '医院',
    department: '科室',
    doctor: '主治医师',
    accompany: '陪同人',
  }];


const ETableForm = (props) => {
  const { data, onSubmit, disabled, value, onChange, templateData, open } = props;

  const handleClick = () => {
    if (disabled) return;
    //   参数校验

    onSubmit(data);
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
          title="当前用药情况-03"
          closeIcon={<CloseCircleOutlined />}
          classNames={{
            footer: 'grid grid-cols-2 justify-between',
            header: 'text-white  text-xl font-semibold  leading-[30px]',
          }}
          footer={[

            <Button key="back" className="text-sm py-[14px]  h-auto" type="primary" ghost>
              删除
            </Button>,
            <Button key="submit" className="text-sm py-[14px]   h-auto" type="primary">
              保存
            </Button>,
          ]}
        >

          <div className="w-full h-[0px] border border-gray-D8"></div>
          <div className="mt-[10px]">


          </div>
        </Modal>
      </ConfigProvider>


      <div
        className="w-[620px] h-[652px] px-[60px] py-5 bg-white rounded flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="w-[500px] justify-between items-center inline-flex">
          <div className="text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
            主要疾病-03
          </div>
          <div className="w-6 h-6 relative">
            <img
              className="w-[22px] h-[22px] left-[1px] top-[1px] absolute"
              src="https://via.placeholder.com/22x22"
            />
          </div>
        </div>
        <div className="w-[500px] h-[0px] border border-zinc-300"></div>
        <div className="flex-col justify-center items-center gap-5 flex">
          <div className="flex-col justify-center items-center gap-2.5 flex">
            <div className="h-[494px] relative">
              <div
                className="w-[500px] h-[74px] left-0 top-0 absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                  疾病名称
                </div>
                <div className="w-[500px] h-10 justify-center items-center inline-flex">
                  <div
                    className="w-[500px] h-10 px-2.5 py-0.5 bg-white rounded border border-zinc-600 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
                      | 请填写
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[500px] h-[74px] left-0 top-[84px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                    就医时间
                  </div>
                </div>
                <div
                  className="w-[500px] h-10 px-2.5 bg-white rounded border border-teal-500 justify-between items-center inline-flex">
                  <div className="grow shrink basis-0 h-9 justify-between items-center flex">
                    <div className="text-zinc-600 text-lg font-semibold font-['PingFang SC'] leading-9">
                      选择后字段
                    </div>
                    <div className="w-6 h-6 px-1.5 py-2 justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div
                className="w-[500px] h-[74px] left-0 top-[168px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                    医院
                  </div>
                </div>
                <div
                  className="w-[500px] h-10 px-2.5 py-2 bg-white rounded border border-zinc-600 justify-start items-center gap-[62px] inline-flex">
                  <div className="grow shrink basis-0 h-9 justify-between items-center flex">
                    <div className="text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
                      请选择
                    </div>
                    <div className="w-6 h-6 px-1.5 py-2 justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div
                className="w-[500px] h-[74px] left-0 top-[252px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                    科室
                  </div>
                </div>
                <div
                  className="w-[500px] h-10 px-2.5 py-2 bg-white rounded border border-zinc-600 justify-start items-center gap-[62px] inline-flex">
                  <div className="grow shrink basis-0 h-9 justify-between items-center flex">
                    <div className="text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
                      请选择
                    </div>
                    <div className="w-6 h-6 px-1.5 py-2 justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div
                className="w-[500px] h-[74px] left-0 top-[336px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                  主治医师
                </div>
                <div className="w-[500px] h-10 justify-center items-center inline-flex">
                  <div
                    className="w-[500px] h-10 px-2.5 py-0.5 bg-white rounded border border-zinc-600 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
                      | 请填写
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[500px] h-[74px] left-0 top-[420px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-[500px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                  陪同人
                </div>
                <div className="w-[500px] h-10 justify-center items-center inline-flex">
                  <div
                    className="w-[500px] h-10 px-2.5 py-0.5 bg-white rounded border border-zinc-600 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
                      | 请填写
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center items-center gap-5 inline-flex">
            <div className="bg-white justify-center items-center flex">
              <div className="h-12 bg-white justify-start items-start flex">
                <div
                  className="grow shrink basis-0 h-12 px-5 py-3.5 rounded border border-teal-500 justify-center items-center gap-10 flex">
                  <div className="grow shrink basis-0 h-5 justify-center items-center gap-2.5 flex">
                    <div
                      className="grow shrink basis-0 text-center text-teal-500 text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide">
                      删除
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded justify-center items-center flex"
              onClick={handleClick}
            >
              <div className="w-60 h-12 px-5 py-3.5 bg-teal-500 rounded justify-center items-center gap-10 flex">
                <div className="grow shrink basis-0 h-5 justify-center items-center gap-2.5 flex">
                  <div
                    className="grow shrink basis-0 text-center text-white text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide">
                    保存
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

const ETable = (props) => {
  const { disabled = false } = props;
  const { value = dataTmp, onChange, templateData = templeteDatdTmp } = props;

  const [currentSelectData, setCurrentSelectData] = useState({});
  const [selectDataIndex, setSelectDataIndex] = useState(0);
  const [formVisible, setFormVisible] = useState(false);
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


  const openETableForm = (data) => {
    //...加载数据
    //...打开ETableForm
    setFormVisible(true);
    setCurrentSelectData({ data });
  };

  console.log('value', value);
  return (
    <>

      <ETableForm open={formVisible} defultValue={currentSelectData} disabled={disabled} onSubmit={handleSubmit}
                  templateData={templateData} />

      <div className="grid grid-cols-2 gap-[20px] items-center">
        {
          value.map((item, index) => (
            <div
              key={item.id} onClick={() => {
              openETableForm(item);
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
                className="w-[200px] text-teal-500 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide">查看
              </div>
            </div>

          ))
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
