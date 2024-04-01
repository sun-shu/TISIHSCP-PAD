import EvaluateForm from '@/pages/evaluate/components/evaluateForm';
import { useMatch } from 'umi';
import { Button, Form, Skeleton } from 'antd';
import React, { useMemo } from 'react';
import useSubmitAddForm from './hooks/useSubmitAddForm';
import { useSearchParams } from '@@/exports';
import useLoadFormTemplateData from './hooks/useLoadFormTemplateData';
import useGetLastRes from '@/pages/evaluate/add/hooks/useGetLastRes';

const addPage = () => {
  const { params } = useMatch('/evaluate/add/:customerId/:templateCode');
  const { templateCode = '', customerId } = params;

  const [searchParams] = useSearchParams();
  const relativeId = searchParams.get('relativeId');
  const relativeType = searchParams.get('relativeType');
  const templateComposeCode = searchParams.get('templateComposeCode');
  const remaindIndex = searchParams.get('remaindIndex');
  const parentRecordMainId = searchParams.get('parentRecordMainId');

  const [form] = Form.useForm();

  const locationParams = {
    templateCode,
    templateComposeCode,
    relativeId,
    relativeType,
    customerId,
    remaindIndex,
    parentRecordMainId,
  };

  // 这里的加载顺序要保持，否则会先读到模板，渲染结果错误
  const { data: lastRes, loading: lastResLoading } = useGetLastRes(locationParams, form);
  const {
    evaluateTemplateData = {},
    loading: templateLoading,
    templateName,
  } = useLoadFormTemplateData(templateCode, form);


  const elementList = useMemo(() => {
    // 有上一次的回显结果 回显上一次的
    const finsh = lastRes && evaluateTemplateData;
    if (!finsh) return [];

    const hasLastRes = lastRes?.resultDataList?.length > 0;
    return hasLastRes ? lastRes?.templateObjectData?.resDTO?.elementList : evaluateTemplateData?.resDTO?.elementList;
  }, [lastRes, evaluateTemplateData]);


  // PATCH：这里使用evaluateTemplateData?.resDTO?.elementList作为初始化数据，因为上一次的回显结果里，后端可能携带默认数据
  const {
    submitAddEvaluteGroupContinue,
    submitAddEvaluteGroupReturn,
    submitAddEvalute,
    loading: submitLoading,
  } = useSubmitAddForm(form, locationParams, evaluateTemplateData?.resDTO?.elementList);

  return (

    <div className="max-w-[620px] m-auto py-[20px]">
      <Skeleton loading={templateLoading || lastResLoading} paragraph={{ rows: 10 }} active>
        <div className="mb-[90px]">
          <div className="mt-[20px]">
            {elementList &&
              <EvaluateForm form={form} templateCode={templateCode} templateName={templateName}
                            elementList={elementList} />}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full flex items-center justify-center bg-white p-5">
          <div className="w-full flex-center">
            {
              templateComposeCode ? (<> <Button type="primary" className="mr-10 w-[240px] h-[48px]"
                                                onClick={submitAddEvaluteGroupReturn}
                                                loading={submitLoading}>提交并返回</Button>
                  {Number(remaindIndex) > 1 && <Button type="primary" ghost className="mr-10 w-[240px] h-[48px]"
                                                       onClick={submitAddEvaluteGroupContinue}
                                                       loading={submitLoading}>继续填写</Button>}</>) :
                <Button type="primary" className="mr-10 w-[240px] h-[48px]" onClick={submitAddEvalute}
                        loading={submitLoading}>提交</Button>
            }
          </div>


        </div>
      </Skeleton>
    </div>


  );
};

export default addPage;
