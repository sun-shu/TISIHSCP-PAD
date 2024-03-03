import ProgressBar from '@/components/ProgressBar';
import EvaluateForm from '@/pages/evaluate/components/evaluateForm';

const addPage = (props) => {
  console.log(props, "props")
  return (
    <div className="max-w-[620px] m-auto py-[20px]">
      <div className="text-[28px] font-semibold leading-10  bg-gray-F6 w-full">
        淋浴評估
      </div>
      <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide pt-[10px]">
        已完成 10 / 20
      </div>
      <ProgressBar processRate={60} />
      <div className="text-right border-b-[1px] py-[10px]">※ 为必填项</div>
      <div className="mt-[20px]">
        <EvaluateForm evaluateData={props.data} />
      </div>
    </div>
  );
};

export default addPage;
