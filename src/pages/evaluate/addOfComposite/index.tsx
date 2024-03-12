//基础类
import { useEffect, useState } from 'react';

//类型定义/枚举
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';
import { EvaluationStatusEnum } from '@/pages/evaluate/addOfComposite/enums/EvaluationStatusEnum';
import {
  CustomerComposeInfoResDTO,
  CustomerComposeResultResDTO,
  GetCustomerComposeInfoRequest,
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
import { useMatch, useRequest } from '@@/exports';
import useSubmitEvaluateGroup from '@/pages/evaluate/addOfComposite/hooks/useSubmitEvaluateGroup';


const ProgressInfo = ({ completeCount = 0, totalCount }) => {
  return (
    <>
      <div className="bg-slate-50 border-b border-zinc-300 pb-[20px]">
        <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide mb-[5px]">
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
      {data.map(({ templateName, questionsCount, templateCode, recordMainId }: CustomerComposeResultResDTO, index) => (
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
                className="px-[10px] py-[4px] bg-golden-F4 flex text-black"
                type="primary"
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
                onClick={() => {
                  handleGoToDetailBtnClick(templateCode, recordMainId);
                }}
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
      customerId: locationParams.customerId,
      remaindIndex: data.length,
    };

    // 使用模板字符串和展开运算符构建URL
    history.push(`/evaluate/add/${templateCode}?${new URLSearchParams(queryParams)}`);
  };

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
  const { params } = useMatch('/evaluate/add-of-composite/:templateCode');
  const { templateCode: templateComposeCode } = params;

  const [searchParams] = useSearchParams();
  const relativeId = searchParams.get('relativeId');
  const relativeType = searchParams.get('relativeType');
  const customerId = searchParams.get('customerId');

  const locationParams = {
    templateComposeCode,
    relativeId,
    relativeType,
    customerId,
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
            <span>综合评估</span>
            <ProgressInfo completeCount={filledListData.length}
                          totalCount={filledListData.length + notFilledListData.length} />
          </div>
        }
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

export default EditCompositeEvaluatePage;
