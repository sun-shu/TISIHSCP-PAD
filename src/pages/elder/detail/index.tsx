import ElderDetailLayout from '@/components/ElderDetailLayout/index';
import { CaretDownFilled } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { history } from 'umi';
import LookIcon from '@/assets/icon/look.png';
import { useSearchParams } from '@@/exports';
import useLoadEvaluteList from '@/pages/elder/detail/hooks/useLoadEvaluteList';
import dayjs from 'dayjs';

// 加载更多分割线
const LoadMoreDivider = ({ handleLoadMoreBtnClick }) => {
  return (
    <div className="w-[620px] h-10 justify-between items-center inline-flex">
      <div className="w-60 h-px bg-zinc-300" />
      <div
        className="w-[134.67px] flex-col justify-center items-center inline-flex pt-[10px]"
        onClick={handleLoadMoreBtnClick}
      >
        <div className="py-0.5 justify-center items-center gap-2.5 inline-flex">
          <div className="text-zinc-600 text-sm font-normal  leading-tight tracking-wide">
            点击加载全部
          </div>
        </div>
        <div className="w-6 h-6 relative">
          <CaretDownFilled />
        </div>
      </div>
      <div className="w-60 h-px bg-zinc-300" />
    </div>
  );
};

// 评估记录卡片
const EvaluationRecordCard = ({ recordMainId, reportTitle = '', reportDate = '', evaluator = '' }) => {
  return (
    <div className="w-[620px] h-[76px] px-[20px] py-[10px] bg-white rounded justify-between items-center inline-flex">
      <div className=" flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-9 text-zinc-700 text-lg font-semibold line-clamp-1 leading-[30px]">
          {reportTitle}
        </div>
        <div className="justify-start items-start inline-flex">
          <div className="justify-start items-start gap-5 flex">
            <div className="text-zinc-700 text-sm font-normal  leading-tight tracking-wide">
              {reportDate}
            </div>
            <div className="justify-start items-start flex">
              <div className="text-zinc-700 text-sm font-normal  leading-tight tracking-wide">
                评估师：
              </div>
              <div className="text-zinc-700 text-sm font-normal  leading-tight tracking-wide">
                {evaluator}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-5  h-auto w-fit  ">
        <Button
          onClick={() => {
            history.push(`/elder/evaluation-report?recordMainId=${recordMainId}`);
          }}
          type="primary"
          className="text-white text-sm flex w-max"

          icon={<img src={LookIcon} width={24} height={24} />}
        >
          查看报告
        </Button>
      </div>
    </div>
  );
};

// 评估趋势卡片
const EvaluationTrendCard = () => {
  return (
    <div className="w-[620px] h-[76px] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-[620px] px-5 py-2.5 bg-white rounded justify-between items-center inline-flex">
        <div className="w-[300px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-9 text-zinc-700 text-lg font-semibold  leading-9">
            养老照护分级评估趋势
          </div>
          <div className="justify-start items-start inline-flex">
            <div className="justify-start items-start gap-5 flex">
              <div className="text-zinc-700 text-sm font-normal  leading-tight tracking-wide">
                2024-01-07
              </div>
            </div>
          </div>
        </div>
        <Button
          type="primary"
          className="text-white text-sm flex"
          onClick={() => {
            history.push('/elder/evaluation-trend');
          }}
          icon={<img src={LookIcon} width={24} height={24} />}

        >
          查看趋势
        </Button>
      </div>
    </div>
  );
};

// 评估记录列表
const EvaluationRecordList = ({ data = [], defaultShowAll = false }) => {
  const [loadMoreBtnShow, setLoadMoreBtnShow] = useState(!defaultShowAll);
  const [recordList, setRecordList] = useState([]);

  console.log('recordList', data);
  useEffect(() => {
    if (defaultShowAll) {
      // loading Data
      setRecordList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      setLoadMoreBtnShow(false);
    } else {
      setRecordList([1, 2, 3, 4]);
    }
  }, []);

  const handleLoadMoreBtnClick = () => {
    alert('handleLoadMoreBtnClick');
    //Loading more data
    setRecordList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    setLoadMoreBtnShow(false);
  };
  return (
    <div className="my-[20px]">
      <div className="text-xl font-semibold  leading-[30px]">评估记录</div>
      <div>共{data?.length}条记录</div>
      {data?.map((item) => (
        <div className="py-[10px]">
          <EvaluationRecordCard
            reportTitle={item.templateName}
            reportDate={dayjs(item.recordTime).format('YYYY-MM-DD')}
            evaluator={item.createUser}
            recordMainId={item.recordMainId}
          />
        </div>
      ))}

      {loadMoreBtnShow && (
        <LoadMoreDivider handleLoadMoreBtnClick={handleLoadMoreBtnClick} />
      )}
    </div>
  );
};

// 评估趋势列表
const EvaluationTrendList = ({ defaultShowAll }) => {
  const [loadMoreBtnShow, setLoadMoreBtnShow] = useState(true);

  useEffect(() => {
    if (defaultShowAll) {
      // loading Data
      setLoadMoreBtnShow(false);
    }
  }, []);

  const handleLoadMoreBtnClick = () => {
    alert('handleLoadMoreBtnClick');
    setLoadMoreBtnShow(false);
  };
  return (
    <div className="my-[20px]">
      <div className=" text-xl font-semibold  leading-[30px]">评估趋势</div>
      <div>共5条记录</div>
      {[1, 2, 3, 4].map(() => (
        <div className="py-[10px]">
          <EvaluationTrendCard
            reportTitle="字段A综合评估报告"
            reportDate="2024-01-07"
            evaluator="李书萍"
          />
        </div>
      ))}

      {loadMoreBtnShow && (
        <LoadMoreDivider handleLoadMoreBtnClick={handleLoadMoreBtnClick} />
      )}
    </div>
  );
};

// 点击切换记录的展示状态按钮
const MenuGroup = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="border-b border-solid border-b-[color:var(--BG-,#DBDBDB)] pb-5 flex gap-[10px]">
      <Button
        className={classNames(
          currentTab === TabTypeEnums.RECORD
            ? 'text-primary hover:text-primary border-primary'
            : '',
          'px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
        )}
        onClick={() => {
          setCurrentTab(TabTypeEnums.RECORD);
        }}
      >
        评估记录
      </Button>
      <Button
        className={classNames(
          currentTab === TabTypeEnums.TREND
            ? 'text-primary hover:text-primary border-primary'
            : '',
          'px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
        )}
        onClick={() => {
          setCurrentTab(TabTypeEnums.TREND);
        }}
      >
        评估趋势
      </Button>
    </div>
  );
};

// 选项卡Tab枚举
enum TabTypeEnums {
  ALL = 'ALL',
  RECORD = 'RECORD',
  TREND = 'TREND',
}

// 长者详情
const ElderDetail = () => {
  const [currentTab, setCurrentTab] = useState(TabTypeEnums.RECORD);
  const [searchParams] = useSearchParams();
  const customerId = searchParams.get('customerId');

  const { data = {} } = useLoadEvaluteList({
    customerId,
  });
  console.log(data, 'data');


  return (
    <>
      <ElderDetailLayout title="长者详情" customerId={customerId}>
        <div>
          <MenuGroup currentTab={currentTab} setCurrentTab={setCurrentTab} />
 
          <div>

            <div hidden={currentTab !== TabTypeEnums.RECORD}>
              <EvaluationRecordList defaultShowAll={true} data={data?.dataList} />
            </div>

            <div hidden={currentTab !== TabTypeEnums.TREND}>
              <EvaluationTrendList defaultShowAll={true} />
            </div>
          </div>
        </div>
      </ElderDetailLayout>
    </>
  );
};

export default ElderDetail;
