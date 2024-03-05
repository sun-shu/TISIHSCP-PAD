import ElderDetailLayout from '@/components/ElderDetailLayout';
import ProgressBar from '@/components/ProgressBar';
import { Button } from 'antd';
import LookIcon from '@/assets/icon/look.png';
import FinishIcon from '@/assets/icon/finish.png';
import EvaluteIcon from '@/assets/icon/evalute-1.png';
import useListOfComposite from './useNotFilledList';
import { useEffect, useState } from 'react';
import { history, useSearchParams } from 'umi';
import { useMatch, useRequest } from '@@/exports';
import {
  CustomerComposeInfoResDTO,
  CustomerComposeResultResDTO,
  getCustomerComposeInfo,
  GetCustomerComposeInfoRequest,
} from '@/api/evaluateTemplate';
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';
import { EvaluationStatusEnum } from '@/pages/evaluate/addOfComposite/enums/EvaluationStatusEnum';

const ProgressInfo = ({ completeCount = 0, totalCount }) => {
  return (
    <>
      <div className="bg-slate-50 border-b border-zinc-300 pb-[20px]">
        <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide mb-[5px]">
          已完成 {completeCount}/{totalCount}
        </div>
        <ProgressBar processRate={Math.floor(completeCount / totalCount)} />
      </div>
    </>
  );
};

const FilledList = ({ compositeStatus = EvaluationStatusEnum.FINISHED, data = [] }) => {

  console.log('data', data);
  const ListOfCompositeHooks = useListOfComposite();

  return (
    <>
      {data.map(({ templateName, questionsCount, templateCode }: CustomerComposeResultResDTO, index) => (
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
          <div className="h-[30px]  justify-between items-center gap-2.5 flex w-full">
            <div className="text-golden-F4 text-lg ">修改比例70%</div>
            {compositeStatus === EvaluationStatusEnum.FINISHED ? (
              <Button
                className="px-[10px] py-[4px] bg-golden-F4 flex text-black"
                type="primary"
                onClick={() => ListOfCompositeHooks.handleButtonClick('finish', data)}
                icon={
                  <img src={FinishIcon} width={24} />
                }
              >
                已完成
              </Button>
            ) : (
              <Button
                className="px-[10px] py-[4px] flex"
                type="primary"
                onClick={() => ListOfCompositeHooks.handleButtonClick('view', data)}
                icon={
                  <img src={LookIcon} width={24} />
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

const NotFilledList = ({ data = [] }) => {
  const handleGoToAddPageBtnClick = (templateCode: string) => {
    history.push('/evaluate/add/' + templateCode);
  };
  const ListOfCompositeHooks = useListOfComposite();
  return (
    <>
      {data.map(({ templateName, questionsCount, templateCode }: CustomerComposeResultResDTO, index) => (
        <div className="h-[170px] p-5 bg-white rounded-[20px] flex-col justify-start items-center inline-flex w-full"
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

const EditCompositeEvaluatePage = (props) => {
  const [filledListData, setFilledListData] = useState([]);
  const [notFilledListData, setNotFilledListData] = useState([]);
  const { params } = useMatch('/evaluate/add-of-composite/:templateCode');

  const { templateCode: templateComposeCode } = params;
  const [searchParams] = useSearchParams();
  const relativeId = searchParams.getAll('relativeId');
  const relativeType = searchParams.getAll('relativeType');

  const { data: templateData = {}, error, loading, run }: {
    data: CustomerComposeInfoResDTO;
    error: any;
    loading: boolean;
    run: any;
  } = useRequest(() => {
    const requestParams: GetCustomerComposeInfoRequest = {
      templateComposeCode,
      ...(relativeType === EvluateRelativeTypeEnum.TASK ? { customerTaskRecordId: relativeId } : {}),
      ...(relativeType === EvluateRelativeTypeEnum.HISTORY ? { recordMainId: relativeId } : {}),
    };

    console.log('requestParams', requestParams);

    return getCustomerComposeInfo(requestParams);
  }, {
    ready: !!templateComposeCode,
    onSuccess: (result, params) => {
      setFilledListData(result.completeList || []);
      setNotFilledListData(result.incompleteList || []);
    },
  });

  console.log('templateList', templateData);

  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(!(notFilledListData.length === 0));
  }, [notFilledListData.length]);

  // 生成报告按钮跳转
  const handleClick = () => {
    history.push('/elder/detail');
  };

  return (
    <>
      <ElderDetailLayout
        title={
          <div>
            <span>综合评估</span>
            <ProgressInfo completeCount={templateData.completeCount} totalCount={templateData.totalCount} />
          </div>
        }
        classname="relative"
      >
        <div className="w-[620px] ">
          <div className="mb-[40px] grid grid-cols-2 gap-[40px]">
            <NotFilledList data={notFilledListData} />
          </div>

          <div className=" grid grid-cols-2 gap-[40px]">
            <FilledList
              data={filledListData}
              compositeStatus={templateData.evaluationStatus}
            />
          </div>
        </div>
        <div className="w-[620px] mt-[20px] flex items-center justify-end">
          <Button
            className="px-[10px] py-[4px] flex"
            type="primary"
            disabled={disabled}
            onClick={handleClick}
          >
            生成报告
          </Button>
        </div>
      </ElderDetailLayout>
    </>
  );
};

export default EditCompositeEvaluatePage;
