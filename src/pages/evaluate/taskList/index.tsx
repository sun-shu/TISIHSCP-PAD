import CustomTag from '@/components/CustomTag';
import { ProfileFilled, SearchOutlined } from '@ant-design/icons';
import { Affix, Button, ConfigProvider, Input } from 'antd';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { history } from 'umi';
import EvaluateIcon from '@/assets/icon/evalute-1.png';

// 选项卡Tab枚举
enum TabTypeEnums {
  // 上月 本月 下月
  ALL = 'ALL',
  PRE_MONTH = 'PRE_MONTH',
  CURRENT_MONTH = 'CURRENT_MONTH',
  NEXT_MONTH = 'NEXT_MONTH',
}

// 点击切换记录的展示状态按钮
const MenuGroup = ({ currentTab, setCurrentTab, scrollTop }) => {
  return (
    <div className="flex gap-[10px] items-center landscape:flex-col align-middle">
      <Button
        onClick={() => {
          setCurrentTab(TabTypeEnums.ALL);
          scrollTop();
        }}
        className={classNames(
          currentTab === TabTypeEnums.ALL
            ? 'text-primary hover:text-primary border-primary'
            : '',
          'w-max px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
        )}
      >
        全部
      </Button>
      <Button
        onClick={() => {
          setCurrentTab(TabTypeEnums.PRE_MONTH);
          scrollTop();
        }}
        className={classNames(
          currentTab === TabTypeEnums.PRE_MONTH
            ? 'text-primary hover:text-primary border-primary'
            : '',
          'px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
        )}
      >
        上月待评估
      </Button>
      <Button
        className={classNames(
          currentTab === TabTypeEnums.CURRENT_MONTH
            ? 'text-primary hover:text-primary border-primary'
            : '',
          'px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
        )}
        onClick={() => {
          setCurrentTab(TabTypeEnums.CURRENT_MONTH);
          scrollTop();
        }}
      >
        本月待评估
      </Button>
      <Button
        className={classNames(
          currentTab === TabTypeEnums.NEXT_MONTH
            ? 'text-primary hover:text-primary border-primary'
            : '',
          'px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
        )}
        onClick={() => {
          setCurrentTab(TabTypeEnums.NEXT_MONTH);
          scrollTop();
        }}
      >
        下月待评估
      </Button>
    </div>
  );
};

const SearchComponent = () => {

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeShadow: 'none',
              activeBorderColor: 'none',
              paddingInline: 0,
            },
            Select: {
              borderRadius: 4,
            },
          },
        }}
      >
        <div className="w-full">
          <Input
            prefix={
              <SearchOutlined className="site-form-item-icon mr-[10px]" />
            }
            placeholder="搜索"
            allowClear
            suffix={
              <Button type="primary" className="rounded-3xl">
                搜索
              </Button>
            }
            size="large"
            className="rounded-[100px] pd-[4px] mb-[10px]"
          />
        </div>
      </ConfigProvider>
    </>
  );
};

const ElderListTemplate = ({ title, data }) => {
  return (
    <div className="  flex-col justify-start items-start gap-[20px] flex mt-[20px]">
      <div className="flex-col justify-start items-start flex">
        <div className="text-zinc-700 text-[28px] font-semibold font-['PingFang SC'] leading-[42px]">
          {title}
        </div>
        <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide">
          上月有3个评估任务未完成
        </div>
      </div>
      <div className="justify-start items-start  gap-[10px] flex  flex-wrap">
        {data.map((item) => (
          <div className="h-[206px] landscape:w-[380px] portrait:w-[300px] p-5 bg-white rounded flex-center flex-col">
            <div className="w-full justify-between items-center gap-5 flex">
              <img
                className="w-[104px] h-[104px] rounded"
                src="https://via.placeholder.com/128x128"
              />
              <div className=" flex-1 flex-col justify-between h-full items-start flex">
                <div className="flex-col justify-between w-full items-start gap-2 flex">
                  <div className="w-full justify-between items-center gap-5 flex">
                    <div className="text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
                      张毅 <span>78岁</span>
                    </div>
                    <div className="portrait:hidden">
                      <CustomTag text="2级照护" />
                    </div>
                  </div>

                  <div className="landscape:hidden">
                    <CustomTag text="2级照护" />
                  </div>
                  <div
                    className="w-full justify-between line-clamp-1 text-zinc-700 text-sm font-semibold font-['PingFang SC'] leading-normal tracking-wide">
                    1号楼-3层-301-1床
                  </div>

                  <div
                    className="text-zinc-700 text-xs  leading-[18px] tracking-wide">入院时间：2023-12-02
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[10px] border-t border-zinc-300 w-full pt-[10px] mt-[10px] items-center">

              <div>
                <div className="line-clamp-1 font-bold">评估项目名称评估项目名称评估项目名称</div>
                <div
                  className="text-zinc-700 text-xs  font-['PingFang SC'] leading-[18px] tracking-wide">计划日期：12-02
                </div>
              </div>
              <Button
                onClick={() => {
                  history.push('/evaluate/template-list');
                }}
                className="px-[10px] py-[4px] flex"
                type="primary"
                icon={
                  <img src={EvaluateIcon} className="site-form-item-icon  font-bold " width={24} />
                }
              >
                开始评估
              </Button>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

// 上月待评估长者列表
const PreMonthElderList = () => {
  return (
    <ElderListTemplate
      title={<span className="text-red-FF">上月待评估长者列表</span>}
      data={[1, 2, 3, 4]}
    ></ElderListTemplate>
  );
};

// 下月待评估长者列表
const NextMonthElderList = () => {
  return (
    <ElderListTemplate
      title="下月待评估长者列表"
      data={[1, 2, 3, 4]}
    ></ElderListTemplate>
  );
};

// 本月待评估长者列表
const CurrentMonthElderList = () => {
  return (
    <ElderListTemplate
      title="本月待评估长者列表"
      data={[1, 2, 3, 4]}
    ></ElderListTemplate>
  );
};

const TaskListPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(TabTypeEnums.ALL);
  const taskListRef = useRef(null);

  const scrollTop = () => {
    // taskListRef.current.scrollIntoView();
  };

  const showPreMonthElderList =
    currentTab === TabTypeEnums.ALL || currentTab === TabTypeEnums.PRE_MONTH;
  const showCurrentMonthElderList =
    currentTab === TabTypeEnums.ALL ||
    currentTab === TabTypeEnums.CURRENT_MONTH;
  const showNextMonthElderList =
    currentTab === TabTypeEnums.ALL || currentTab === TabTypeEnums.NEXT_MONTH;

  useEffect(() => {
    //loading elder data
  }, []);
  return (
    <>
      <div className="flex  items-stretch pb-12 justify-center landscape:gap-[20px]">
        <Affix offsetTop={50}>
          <div className="portrait:hidden pt-[120px]  bg-gray-F6 pr-[20px]">
            <MenuGroup
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              scrollTop={scrollTop}
            />
          </div>
        </Affix>

        <div className="bg-slate-50 self-stretch flex flex-col justify-center items-center  ">
          <Affix offsetTop={50} className="w-full">
            <div className="border-b-[1px] border-solid border-bg- pb-[20px]  pt-[10px] bg-gray-F6">
              <div className="text-[28px] font-semibold leading-10  bg-gray-F6 w-full">
                任务列表
              </div>
              <div
                className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide pb-[10px]">
                本周共有 10位长者待评估
              </div>

              <SearchComponent />
              <div className="landscape:hidden">
                <div className="bg-gray-F6 py-[5px]">
                  <MenuGroup
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    scrollTop={scrollTop}
                  />
                </div>
              </div>
            </div>
          </Affix>

          <div className="pt-[16px] portrait:w-[620px] landscape:w-[800px]" ref={taskListRef}>
            {showPreMonthElderList && <PreMonthElderList />}
            {showCurrentMonthElderList && <CurrentMonthElderList />}
            {showNextMonthElderList && <NextMonthElderList />}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskListPage;
