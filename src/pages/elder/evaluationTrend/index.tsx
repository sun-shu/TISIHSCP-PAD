import ElderDetailLayout from '@/components/ElderDetailLayout';
import { Button } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';

enum TabTypeEnums {
  ALL = 'ALL',
  RECORD = 'RECORD',
  TREND = 'TREND',
}

// 点击切换记录的展示状态按钮
const MenuGroup = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="border-b border-solid border-b-[color:var(--BG-,#DBDBDB)] pb-5 flex gap-[10px]">
      <Button
        onClick={() => {
          setCurrentTab(TabTypeEnums.ALL);
        }}
        className={classNames(
          currentTab === TabTypeEnums.ALL
            ? 'text-primary hover:text-primary border-primary'
            : '',
          'px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
        )}
      >
        全部
      </Button>
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

const EvaluationTrendPage = () => {
  const [currentTab, setCurrentTab] = useState(TabTypeEnums.ALL);

  return (
    <>
      <ElderDetailLayout title="评估趋势">
        <div>
          <MenuGroup currentTab={currentTab} setCurrentTab={setCurrentTab} />

          <div></div>
        </div>
      </ElderDetailLayout>
    </>
  );
};

export default EvaluationTrendPage;
