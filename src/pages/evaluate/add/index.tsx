import ProgressBar from '@/components/ProgressBar';
import EvaluateForm from '@/pages/evaluate/components/evaluateForm';
import { useMatch } from 'umi';
import { useRequest } from '@@/exports';
import { getEvaluateTemplateData, TemplateDataResultDTO } from '@/api/evaluateTemplate';

const addPage = () => {
  const { params } = useMatch('/evaluate/add/:templateCode');
  const { templateCode = '28030065433N' } = params;


  const { data: templateData = {}, error, loading, run }: {
    data: TemplateDataResultDTO,
    [property: string]: any
  } = useRequest(() => {
    return getEvaluateTemplateData({
      templateCode: templateCode,
    });
  });

  return (
    <div className="max-w-[620px] m-auto py-[20px]">
      <div className="text-[28px] font-semibold leading-10  bg-gray-F6 w-full">
        {templateData.resDTO?.templateName}
      </div>
      <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide pt-[10px]">
        已完成 10 / 20
      </div>
      <ProgressBar processRate={60} />
      <div className="text-right border-b-[1px] py-[10px]">※ 为必填项</div>
      <div className="mt-[20px]">
        <EvaluateForm elementList={templateData?.resDTO?.elementList} />
      </div>
    </div>
  );
};

export default addPage;
