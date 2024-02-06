import ElderDetailLayout from '@/components/ElderDetailLayout';
import ProgressBar from '@/components/ProgressBar';
import { history } from '@@/core/history';
import { ProfileFilled } from '@ant-design/icons';
import { Button } from 'antd';

const ProgressInfo = () => {
  return (
    <>
      <div className="bg-slate-50 border-b border-zinc-300 pb-[20px]">
        <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide mb-[5px]">
          已完成 10/20
        </div>
        <ProgressBar />
      </div>
    </>
  );
};

const FilledList = ({ compositeStatus = 1, data = [1, 2, 3, 4] }) => {
  return (
    <>
      {data.map((item) => (
        <div className="h-[170px] p-5 bg-white rounded-[20px] flex-col justify-start items-center inline-flex  w-full">
          <div className="self-stretch h-[100px] flex-col text-justify items-start gap-1 flex">
            <div className="self-stretch h-[60px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px] line-clamp-2">
              认知症周边症状认知症周边症状认知症周边症状认知症周边症状
            </div>
            <div className="text-zinc-700 text-lg font-normal font-['PingFang SC'] leading-9">
              共10题
            </div>
          </div>
          <div className="h-[30px] flex-col justify-start items-end gap-2.5 flex w-full">
            {compositeStatus === 1 ? (
              <Button
                disabled
                className="px-[10px] py-[4px]"
                type="primary"
                onClick={() => {
                  history.push('/evaluate/template-list-composite');
                }}
                icon={
                  <ProfileFilled className="site-form-item-icon  font-bold " />
                }
              >
                已完成
              </Button>
            ) : (
              <Button
                className="px-[10px] py-[4px]"
                type="primary"
                onClick={() => {
                  history.push('/evaluate/template-list-composite');
                }}
                icon={
                  <ProfileFilled className="site-form-item-icon  font-bold " />
                }
              >
                查看
              </Button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

const NotFilledList = ({ data = [1, 2, 3, 4] }) => {
  return (
    <>
      {data.map((item) => (
        <div className="h-[170px] p-5 bg-white rounded-[20px] flex-col justify-start items-center inline-flex w-full">
          <div className="self-stretch h-[100px] flex-col text-justify items-start gap-1 flex">
            <div className="self-stretch h-[60px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px] line-clamp-2">
              认知症周边症状认知症周边症状认知症周边症状认知症周边症状
            </div>
            <div className="text-zinc-700 text-lg font-normal font-['PingFang SC'] leading-9">
              共10题
            </div>
          </div>
          <div className="h-[30px] flex-col justify-start items-end gap-2.5 flex w-full">
            <Button
              className="px-[10px] py-[4px]"
              type="primary"
              onClick={() => {
                history.push('/evaluate/template-list-composite');
              }}
              icon={
                <ProfileFilled className="site-form-item-icon  font-bold " />
              }
            >
              去填写
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

const EditCompositeEvaluatePage = () => {
  // 区分有没有评估实体 还是只有模版，在第一次提交生成模版
  // 任务？
  // 评估实体？
  // 评估报告（评估是否已经填完）
  // 这里的逻辑是 传进来任务ID，评估模版ID，综合评估本身（上面可能有评估状态）
  // 根据评估模版ID获取评估模版，根据评估实体回显，展示未填写的和已填写的，其中已填写的又分查看和已填写完成。综合评估已有结果的，查看跳转编辑页

  //开启评估 已完成 查看

  const taskId = 0;
  const templateId = 0;
  const compositeId = 0;
  const compositeStatus = 0;
  const compositeResult = 0;

  const notFilledListData = [1, 2, 3, 4, 5];
  const filledListData = [5, 6, 7, 8];
  return (
    <>
      <ElderDetailLayout
        title={
          <div>
            <span>综合评估</span>
            <ProgressInfo />
          </div>
        }
      >
        <div className="w-[620px] ">
          <div className="mb-[40px] grid grid-cols-2 gap-[40px]">
            <NotFilledList data={notFilledListData} />
          </div>

          <div className=" grid grid-cols-2 gap-[40px]">
            <FilledList
              data={filledListData}
              compositeStatus={compositeStatus}
            />
          </div>
        </div>
      </ElderDetailLayout>
    </>
  );
};

export default EditCompositeEvaluatePage;
