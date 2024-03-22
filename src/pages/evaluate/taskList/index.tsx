import CustomTag from '@/components/CustomTag';
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Affix, Avatar, Button, ConfigProvider, Input } from 'antd';
import classNames from 'classnames';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { history, useRequest } from 'umi';
import { CustomerTaskRecordPadItemDTO } from '@/api/task/getTaskList.interface';
import { getTaskList } from '@/api/task';
import dayjs from 'dayjs';
import EmptyDataContainer from '@/components/exception/EmptyDataContainer/index';
import { TaskTypeEnum } from '@/enums/TaskTypeEnum';
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';
import LevelOfCareTag from '@/components/LevelOfCareTag';
import ManAvatar from '@/assets/avatar/man.png';
import WomanAvatar from '@/assets/avatar/woman.png';

import EvaluateIcon from '@/assets/icon/evalute-1.png';
import { SexEnum } from '@/enums/SexEnum';

// 选项卡Tab枚举
enum TabTypeEnums {
  // 上月 本月 下月
  ALL = 'ALL',
  PRE_MONTH = 'PRE_MONTH',
  CURRENT_MONTH = 'CURRENT_MONTH',
  NEXT_MONTH = 'NEXT_MONTH',
}

// 点击切换记录的展示状态按钮
const MenuGroup = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="flex gap-[10px] items-center landscape:flex-col align-middle">
      <Button
        onClick={() => {
          setCurrentTab(TabTypeEnums.ALL);
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
        }}
      >
        下月待评估
      </Button>
    </div>
  );
};

const SearchComponent = ({ searchElder }) => {
  const [keyword, setKeyword] = useState('');

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
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            placeholder="搜索"
            allowClear={{
              clearIcon: <CloseCircleOutlined onClick={() => {
                searchElder('');
              }} />,
            }}
            suffix={
              <Button type="primary" className="rounded-3xl" onClick={() => {
                searchElder(keyword);
              }}>
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


const ElderListTemplate = ({ title, data = [], countDescription, loading }: {
  title: string | ReactNode,
  data?: CustomerTaskRecordPadItemDTO[] | [],
  countDescription: string | ReactNode,
  [key: string]: any
}) => {

  const handleClickGoToEvaluePage = (id, customerId, taskType: TaskTypeEnum, templateCode: string) => {
    const nextPath = taskType === TaskTypeEnum.COMPREHENSIVE_EVALUATION ? `/evaluate/add-and-view-of-composite/${customerId}/${templateCode}` : `/evaluate/add/${customerId}/${templateCode}`;
    history.push({
      pathname: nextPath,
      search: `?relativeId=${id}&relativeType=${EvluateRelativeTypeEnum.TASK}`,
    });
  };

  return (
    <div className="  flex-col justify-start items-start gap-[20px] flex mt-[20px]">
      <div className="flex-col justify-start items-start flex">
        <div className="text-zinc-700 text-[28px] font-semibold font-['PingFang SC'] leading-[42px]">
          {title}
        </div>
        <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide">
          {countDescription}
        </div>
      </div>
      <div className="min-h-[100px] w-full">
        <EmptyDataContainer data={data} emptyClassName="w-full" loading={loading}>
          <div className="justify-start items-start  gap-[10px] flex  flex-wrap">
            {data?.map(({
                          imageUrl,
                          name,
                          id,
                          bedName,
                          nurseGrade,
                          templateName,
                          age,
                          checkInTime,
                          taskExecuteDate,
                          templateCode,
                          taskType,
                          customerId,
                          gender,
                        }) => (
              <div className=" landscape:w-[380px] portrait:w-[300px] p-5 bg-white rounded flex-center flex-col"
                   onClick={() => {
                     handleClickGoToEvaluePage(id, customerId, taskType, templateCode);
                   }}>
                <div className="w-full justify-between items-center gap-5 flex">
                  <Avatar src={imageUrl}
                          icon={<img src={gender === SexEnum.FEMALE ? WomanAvatar : ManAvatar} width={160}
                                     height={160} />} shape="square"
                          className="w-[104px] h-[104px] border-none bg-white">

                  </Avatar>
                  <div className=" flex-1 flex-col justify-between h-full items-start flex">
                    <div className="flex-col justify-between w-full items-start gap-2 flex">
                      <div className="w-full justify-between items-center gap-5 flex">
                        <div
                          className="text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px] line-clamp-1">
                          {name} <span>{age}岁</span>
                        </div>
                        <div className="portrait:hidden">
                          <LevelOfCareTag level={nurseGrade} />
                        </div>
                      </div>

                      <div className="landscape:hidden">
                        <LevelOfCareTag level={nurseGrade} />
                      </div>
                      <div
                        className="w-full justify-between line-clamp-1 text-zinc-700 text-sm font-semibold font-['PingFang SC'] leading-normal tracking-wide">
                        {bedName ? bedName : '-'}
                      </div>

                      <div
                        className="text-zinc-700 text-xs  leading-[18px] tracking-wide">入院时间：{
                        checkInTime ? dayjs(checkInTime).format('YYYY-MM-DD') : '-'
                      }
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="flex justify-between w-full items-center mt-[10px] pt-[10px] border-t border-zinc-300 gap-[5px]">
                  <div className="flex flex-col ">
                    <div className="text-left line-clamp-1 font-normal text-base">
                      {templateName}
                    </div>


                    <div className="text-zinc-700 text-xs font-light font-['PingFang SC'] leading-[18px] tracking-wide">
                      计划日期：{taskExecuteDate}
                    </div>
                  </div>

                  <div className="flex items-end">
                    <Button type="primary" className="flex items-center justify-center px-[10px]"
                            icon={<img src={EvaluateIcon} width={24}
                            />}>开始评估</Button>
                  </div>
                </div>


              </div>
            ))}
          </div>
        </EmptyDataContainer>

      </div>

    </div>
  );
};

// 上月待评估长者列表
const PreMonthElderList = ({ data = [], loading }) => {
  return (
    <ElderListTemplate
      loading={loading}
      title={<span className="text-red-FF">上月待评估长者列表</span>}
      countDescription={data?.length > 0 ? <span>上月有{data?.length}个评估任务待完成</span> : ''}
      data={data}
    ></ElderListTemplate>
  );
};

// 下月待评估长者列表
const NextMonthElderList = ({ data = [], loading }) => {
  return (

    <ElderListTemplate
      loading={loading}
      title="下月待评估长者列表"
      countDescription={data?.length > 0 ? <span>下月有{data?.length}个评估任务待完成</span> : ''}
      data={data}
    ></ElderListTemplate>


  );
};

// 本月待评估长者列表
const CurrentMonthElderList = ({ data = [], loading }) => {
  return (
    <ElderListTemplate
      loading={loading}
      title="本月待评估长者列表"
      countDescription={data?.length > 0 ? <span>本月有{data?.length}个评估任务待完成</span> : ''}
      data={data}
    ></ElderListTemplate>
  );
};

const TaskListPage = () => {
  const [currentTab, setCurrentTab] = useState(TabTypeEnums.ALL);
  const taskListRef = useRef(null);


  const showPreMonthElderList =
    currentTab === TabTypeEnums.ALL || currentTab === TabTypeEnums.PRE_MONTH;
  const showCurrentMonthElderList =
    currentTab === TabTypeEnums.ALL ||
    currentTab === TabTypeEnums.CURRENT_MONTH;
  const showNextMonthElderList =
    currentTab === TabTypeEnums.ALL || currentTab === TabTypeEnums.NEXT_MONTH;

  const { data: taskList = {}, error, loading, run } = useRequest((keyword = '') => {
    return getTaskList({
      name: keyword,
    });
  });

  const searchElder = (keyword: string = '') => {
    console.log('搜索', keyword);
    run(keyword);
  };
  console.log('taskList', taskList);


  return (
    <>
      <div className="flex  items-stretch pb-12 justify-center landscape:gap-[20px]" key={currentTab}>
        <Affix offsetTop={50}>
          <div className="portrait:hidden pt-[120px]  bg-gray-F6 pr-[20px]">
            <MenuGroup
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </div>
        </Affix>

        <div className="bg-slate-50 self-stretch flex flex-col justify-center items-center h-auto  ">
          <Affix offsetTop={50} className="w-full">
            <div className="border-b-[1px] border-solid border-bg- pb-[20px]  pt-[10px] bg-gray-F6">
              <div className="text-[28px] font-semibold leading-10  bg-gray-F6 w-full">
                任务列表
              </div>
              <div
                className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide pb-[10px]">
                {/*本周共有 10位长者待评估*/}
              </div>

              <SearchComponent searchElder={searchElder} />
              <div className="landscape:hidden">
                <div className="bg-gray-F6 py-[5px]">
                  <MenuGroup
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                  />
                </div>
              </div>
            </div>
          </Affix>


          <div className="pt-[16px] portrait:w-[620px] landscape:w-[800px]" ref={taskListRef}>
            {showPreMonthElderList && <PreMonthElderList data={taskList.lastMonth} loading={loading} />}
            {showCurrentMonthElderList &&
              <CurrentMonthElderList data={taskList.currentMonth} loading={loading} />}
            {showNextMonthElderList && <NextMonthElderList data={taskList.nextMonth} loading={loading} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskListPage;
