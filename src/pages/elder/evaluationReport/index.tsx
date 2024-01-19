import ElderDetailLayout from '@/pages/elder/components/ElderDetailLayout';
import { useLayoutEffect, useState } from 'react';

const EvaluationReportSummer = () => {
  const EvaluationReportContent = [
    {
      title: '洗澡',
      score: 6,
      content:
        '洗澡配合程度高，可独立完成准备工作，但洗澡的完整过程需要看护。洗澡的温度偏高，容易影响血压。洗澡配合程度高，可独立完成准备工作，但洗澡的完整过程需要看护。洗澡的温度偏高，容易影响血压。洗澡配合程度高，可独立完成准备工作，但洗澡的完整过程需要看护。洗澡的温度偏高，容易影响血压。',
    },
    {
      title: '洗澡',
      score: 6,
      content:
        '洗澡配合程度高，可独立完成准备工作，但洗澡的完整过程需要看护。洗澡的温度偏高，容易影响血压。',
    },
    {
      title: '洗澡',
      score: 6,
      content:
        '洗澡配合程度高，可独立完成准备工作，但洗澡的完整过程需要看护。洗澡的温度偏高，容易影响血压。',
    },
    {
      title: '洗澡',
      score: 6,
      content:
        '洗澡配合程度高，可独立完成准备工作，但洗澡的完整过程需要看护。洗澡的温度偏高，容易影响血压。',
    },
    {
      title: '洗澡',
      score: 6,
      content:
        '洗澡配合程度高，可独立完成准备工作，但洗澡的完整过程需要看护。洗澡的温度偏高，容易影响血压。洗澡配合程度高，可独立完成准备工作，但洗澡的完整过程需要看护。洗澡的温度偏高，容易影响血压。洗澡配合程度高，可独立完成准备工作，但洗澡的完整过程需要看护。洗澡的温度偏高，容易影响血压。洗澡配合程度高，可独立完成准备工作，但洗澡的完整过程需要看护。洗澡的温度偏高，容易影响血压。',
    },
    {
      title: '更衣',
      score: 9,
      content: '更衣配合程度高，无法独立完成更衣的流程，需要全程协助。',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。',
    },
    {
      title: '洗漱',
      score: 2,
      content:
        '洗澡配合程度高，可在提醒下完成洗漱过程。洗澡配合程度高，可在提醒下完成洗漱过程。洗澡配合程度高，可在提醒下完成洗漱过程。',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
    {
      title: '洗漱',
      score: 2,
      content: '洗澡配合程度高，可在提醒下完成洗漱过程。last',
    },
  ];

  const a = EvaluationReportContent.map((item, index) => {
    const component = (
      <div className="card-group h-min p-5  top-[426px]  bg-white rounded-[20px] flex-col justify-start items-center inline-flex">
        <div className="self-stretch  flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch pb-1 border-b border-zinc-300 justify-start items-start gap-1 inline-flex">
            <div className="grow shrink basis-0 text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
              {item.title}
            </div>
            <div className="text-zinc-700 text-xl font-semibold font-['PingFang SC'] leading-[30px]">
              {item.score}分
            </div>
          </div>
          <div className=" justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-justify text-zinc-700 text-lg font-normal font-['PingFang SC'] leading-9">
              {item.content}
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
    doms.length === a.length &&
      doms.map((item, index) => {
        const height = item.offsetHeight;

        setComponentStack((prev) => {
          if (leftHeight <= rightHeight) {
            leftHeight += height;

            return {
              ...prev,
              left: [...prev.left, a[index].component],
            };
          } else {
            rightHeight += height;

            return {
              ...prev,
              right: [...prev.right, a[index].component],
            };
          }
        });
      });
  }, []);

  return (
    <>
      <div className="invisible fixed max-w-[305px]">
        {a.map((item) => item.component)}
      </div>
      <div className="flex   justify-between  gap-[20px] w-[620px] ">
        <div className="flex flex-col gap-[20px] max-w-[305px] h-max">
          {componentStack.left.map((item) => item)}
        </div>
        <div className="flex flex-col gap-[20px]  max-w-[305px]  h-max">
          {componentStack.right.map((item) => item)}
        </div>
      </div>
    </>
  );
};

// 长者详情
const EvaluationReportPage = () => {
  return (
    <>
      <ElderDetailLayout title="综合评估报告">
        <div className="w-[620px]">
          <div className="w-full  top-[184px]  justify-between items-start inline-flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="flex-col justify-start items-start flex">
                <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide">
                  综合评分
                </div>
              </div>
              <div className="text-zinc-700 text-[28px] font-semibold font-['PingFang SC'] leading-[42px]">
                5.8
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="flex-col justify-start items-start flex">
                <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide">
                  综合评分
                </div>
              </div>
              <div className="text-zinc-700 text-[28px] font-semibold font-['PingFang SC'] leading-[42px]">
                2级照护
              </div>
            </div>
          </div>
          <div className=" top-[278px]  flex-col justify-start items-start gap-1 inline-flex my-[30px]">
            <div className="text-zinc-700 text-[28px] font-semibold font-['PingFang SC'] leading-[42px]">
              总结
            </div>
            <div className=" text-zinc-600 text-lg font-normal font-['PingFang SC'] leading-9">
              需要高度协协助更衣和清扫的流程，洗澡、睡眠以及日常沟通在正常范围，洗漱和洗衣的自主程度较高。
            </div>
          </div>
          <EvaluationReportSummer></EvaluationReportSummer>
        </div>
      </ElderDetailLayout>
    </>
  );
};

export default EvaluationReportPage;
