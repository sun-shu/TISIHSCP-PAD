import ElderDetailLayout from '@/components/ElderDetailLayout';
import { useLayoutEffect, useState } from 'react';
import useLoadReportData from '@/pages/elder/evaluationReport/hooks/useLoadReportData';
import { useMatch, useSearchParams } from '@@/exports';

const EvaluationReportSummer = ({ completeList = [] }) => {
  console.log(completeList, 'completeList');
 
  const components = completeList.map((item, index) => {
    const component = (
      <div
        key={item?.id}
        className="card-group h-min p-5  top-[426px]  bg-white rounded-[20px] flex-col justify-start items-center inline-flex">
        <div className="self-stretch  flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch pb-1 border-b border-zinc-300 justify-start items-start gap-1 inline-flex">
            <div
              className="grow shrink basis-0 text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
              {item?.templateName}
            </div>
            <div className="text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
              {item?.recordScore}分
            </div>
          </div>
          <div className=" justify-start items-start gap-2.5 inline-flex">
            <div
              className="grow shrink basis-0 text-justify text-zinc-700 text-lg font-normal font-['PingFang SC'] leading-9">
              {item?.commentaryName || '...'}
            </div>
          </div>
        </div>
      </div>
    );

    const height = component.offsetHeight;

    return {
      component,
      height,
      index,
    };
  });

  const [componentStack, setComponentStack] = useState({
    left: [],
    right: [],
  });

  useLayoutEffect(() => {
    let leftHeight = 0;
    let rightHeight = 0;

    const doms = [...document.getElementsByClassName('card-group')] || [];
    doms.length === components.length &&
    doms.map((item, index) => {
      const height = item?.offsetHeight;

      setComponentStack((prev) => {
        if (leftHeight <= rightHeight) {
          leftHeight += height;

          return {
            ...prev,
            left: [...prev.left, components[index].component],
          };
        } else {
          rightHeight += height;

          return {
            ...prev,
            right: [...prev.right, components[index].component],
          };
        }
      });
    });
  }, []);

  return (
    <>
      <div className="invisible fixed max-w-[305px]">
        {components.map((item) => item?.component)}
      </div>
      <div className="flex   justify-between  gap-[20px] w-[620px] ">
        <div className="flex flex-col gap-[20px] max-w-[305px] h-max  w-full">
          {componentStack.left.map((item) => item)}
        </div>
        <div className="flex flex-col gap-[20px]  max-w-[305px] w-full  h-max">
          {componentStack.right.map((item) => item)}
        </div>
      </div>
    </>
  );
};

// 长者详情
const EvaluationReportPage = () => {
  const [searchParams] = useSearchParams();
  const relativeId = searchParams.get('relativeId');
  const relativeType = searchParams.get('relativeType');
  const customerId = searchParams.get('customerId');
  const templateComposeCode = searchParams.get('templateComposeCode');
  const recordMainId = searchParams.get('recordMainId');
//=211005735
  const locationParams = {
    relativeId,
    relativeType,
    customerId,
    templateComposeCode,
    recordMainId,
  };

  const { data = {}, loading } = useLoadReportData(locationParams);

  console.log('EvaluationReportPage', data);
  return (
    <>
      <ElderDetailLayout title={templateComposeCode ? '综合评估报告' : '评估报告'} customerId={customerId}>
        <div className="w-[620px]">
          <div className="w-full  top-[184px]  justify-between items-start inline-flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="flex-col justify-start items-start flex">
                <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide">
                  综合评分
                </div>
              </div>
              <div className="text-zinc-700 text-[28px] font-semibold font-['PingFang SC'] leading-[42px]">
                {data?.recordScore}
              </div>
            </div>

          </div>
          <div className=" top-[278px]  flex-col justify-start items-start gap-1 inline-flex my-[30px]">
            <div className="text-zinc-700 text-[28px] font-semibold font-['PingFang SC'] leading-[42px]">
              总结
            </div>
            <div className=" text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
              {data?.commentaryName || '暂无总结'}
            </div>
          </div>
          {
            data?.completeList?.length > 0 &&
            <EvaluationReportSummer completeList={data?.completeList}></EvaluationReportSummer>}
        </div>
      </ElderDetailLayout>
    </>
  );
};

export default EvaluationReportPage;
