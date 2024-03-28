//基础类

//类型定义/枚举
import { EvaluationStatusEnum } from './enums/EvaluationStatusEnum';
import {
  CustomerComposeResultResDTO,
} from '@/api/evaluateTemplate/getCustomerComposeInfo.interface';

//组件
import ProgressBar from '@/components/ProgressBar';
import { Button } from 'antd';
import LookIcon from '@/assets/icon/look.png';
import FinishIcon from '@/assets/icon/finish.png';
import EvaluteIcon from '@/assets/icon/evalute-1.png';
import ElderDetailLayout from '@/components/ElderDetailLayout';

//hooks
import useLoadTemplateData from './hooks/useLoadTemplateData';

//工具
import { history, useSearchParams } from 'umi';
import { useMatch } from '@@/exports';
import useSubmitEvaluateGroup from './hooks/useSubmitEvaluateGroup';

const ProgressInfo = ({ completeCount = 0, totalCount }) => {
  return (
    <>
      <div className="bg-slate-50 border-b border-zinc-300 pb-[20px]">
        <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide  my-[5px] ">
          已完成 {completeCount}/{totalCount}
        </div>
        <ProgressBar processRate={completeCount / totalCount * 100} />
      </div>
    </>
  );
};

const FilledList = ({ compositeStatus = EvaluationStatusEnum.FINISHED, data = [] }) => {
  const handleGoToDetailBtnClick = (templateCode: string, recordMainId: string) => {
    history.push(`/evaluate/detail/${templateCode}/${recordMainId}`);
  };

  return (
    <>
      {data?.map(({ templateName, questionsCount, templateCode, recordMainId }: CustomerComposeResultResDTO, index) => (
        <div className="h-[170px] p-5 bg-white rounded-[20px] flex-col justify-start items-center inline-flex  w-full"
             key={index}>
          <div className="self-stretch h-[100px] flex-col text-justify items-start gap-1 flex">
            <div
              className="self-stretch h-[60px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px] line-clamp-2">
              {templateName}
            </div>
            <div className="text-zinc-700 text-lg font-normal font-['PingFang SC'] leading-9">
              共{questionsCount}题
            </div>

          </div>
          <div className="h-[30px]  justify-end items-center gap-2.5 flex w-full">
            {/*<div className="text-golden-F4 text-lg ">修改比例70%</div>*/}
            {compositeStatus === EvaluationStatusEnum.FINISHED ? (
              <Button
                className="px-[10px] py-[4px] flex"
                type="primary"
                onClick={() => {
                  handleGoToDetailBtnClick(templateCode, recordMainId);
                }}
                icon={
                  <img src={LookIcon} width={24} />
                }
              >
                查看
              </Button>
            ) : (
              <Button
                className="px-[10px] py-[4px] bg-golden-F4 flex text-black"
                type="primary"
                icon={
                  <img src={FinishIcon} width={24} />
                }
                onClick={() => {
                  handleGoToDetailBtnClick(templateCode, recordMainId);
                }}
              >
                已完成
              </Button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

interface NotFilledListProps {
  data: CustomerComposeResultResDTO[];
  locationParams: {
    templateComposeCode?: string;
    relativeId?: string[];
    relativeType?: string[];
    customerId?: string[];
  };
}

const NotFilledList = ({ data, locationParams = {} }: NotFilledListProps) => {
  const handleGoToAddPageBtnClick = (templateCode: string) => {
    // 定义要传递的参数对象
    const queryParams = {
      relativeId: locationParams.relativeId,
      relativeType: locationParams.relativeType,
      templateComposeCode: locationParams.templateComposeCode,
      remaindIndex: data?.length,
      parentRecordMainId: locationParams.recordMainId,
    };

    // 使用模板字符串和展开运算符构建URL
    history.push(`/evaluate/add/${locationParams.customerId}/${templateCode}?${new URLSearchParams(queryParams)}`);
  };

  return (
    <>
      {data?.map(({ templateName, questionsCount, templateCode }: CustomerComposeResultResDTO, index) => (
        <div className="h-[170px] p-5 bg-white rounded-[20px] flex-col justify-start items-center inline-flex w-full"
             key={index}>
          <div className="self-stretch h-[100px] flex-col text-justify items-start gap-1 flex">
            <div
              className="self-stretch h-[60px] text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px] line-clamp-2">
              {templateName}
            </div>
            <div className="text-zinc-700 text-lg font-normal font-['PingFang SC'] leading-9  mt-[5px]">
              共{questionsCount}题
            </div>
          </div>
          <div className="h-[30px] flex-col justify-start items-end gap-2.5 flex w-full">
            <Button
              className="px-[10px] py-[4px] flex"
              type="primary"
              onClick={() => handleGoToAddPageBtnClick(templateCode)}
              icon={
                <img src={EvaluteIcon} width={24} />
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

//  该页面支持2个固定参数，customerId和templateCode，
//  4个可选参数，templateComposeCode、relativeId、relativeType、remaindIndex
// templateComposeCode: 综合评估模板编码
// relativeId: 关联对象ID customerIdstomerId: 客户ID, taskId: 任务ID, mainId: 记录ID
// relativeType: 关联对象类型 对应枚举 EvluateRelativeTypeEnum
// remaindIndex: 剩余未填写的模板数量
const AddAndViewOfCompositePage = (props) => {
  const { params } = useMatch('/evaluate/add-and-view-of-composite/:customerId/:templateCode');
  const { templateCode: templateComposeCode, customerId } = params;

  const [searchParams] = useSearchParams();
  const relativeId = searchParams.get('relativeId');
  const relativeType = searchParams.get('relativeType');
  const recordMainId = searchParams.get('recordMainId');

  const locationParams = {
    templateComposeCode,
    relativeId,
    relativeType,
    customerId,
    recordMainId,
  };

  const { filledListData, notFilledListData, templateData } = useLoadTemplateData(locationParams);

  const disabled = !(notFilledListData.length === 0);

  const { submitEvaluateGroup, viewReport, loading } = useSubmitEvaluateGroup(locationParams);
 

  return (
    <>
      <ElderDetailLayout
        customerId={customerId}
        title={
          <div>
            <span>{templateData.templateComposeName}</span>
            <ProgressInfo completeCount={filledListData.length}
                          totalCount={filledListData.length + notFilledListData.length} />
          </div>
        }
        rowCardoffsetTop={155}
        classname="relative"
      >
        <div className="w-[620px] ">
          <div className="mb-[40px] grid grid-cols-2 gap-[40px]">
            <NotFilledList data={notFilledListData} locationParams={locationParams} />
          </div>

          <div className=" grid grid-cols-2 gap-[40px]">
            <FilledList
              data={filledListData}
              compositeStatus={templateData.evaluationStatus}
            />
          </div>
        </div>
        <div className="w-[620px] mt-[20px] flex items-center justify-end">
          {
            templateData.evaluationStatus === EvaluationStatusEnum.UNFINISHED ? (
              <Button
                className="px-[10px] py-[4px] flex"
                type="primary"
                loading={loading}
                disabled={disabled}
                onClick={submitEvaluateGroup}
              >
                生成报告
              </Button>
            ) : (
              <Button
                className="px-[10px] py-[4px] flex"
                type="primary"
                onClick={viewReport}
              >
                查看报告
              </Button>
            )
          }

        </div>
      </ElderDetailLayout>
    </>
  );
};

// PS：该页面承担查看综合评估和新增综合评估 如果后期有较大差异，需要拆成两个页面
export default AddAndViewOfCompositePage;
