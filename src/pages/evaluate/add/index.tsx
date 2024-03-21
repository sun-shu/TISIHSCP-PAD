import EvaluateForm from '@/pages/evaluate/components/evaluateForm';
import { useMatch } from 'umi';
import { Button, Form, Skeleton } from 'antd';
import React from 'react';
import useSubmitAddForm from './hooks/useSubmitAddForm';
import { useSearchParams } from '@@/exports';
import useLoadFormTemplateData from '@/pages/evaluate/components/evaluateForm/hooks/useLoadFormTemplateData';
import useGetLastRes from '@/pages/evaluate/add/hooks/useGetLastRes';

// TODO: 1. 表单进度条 2. 长者信息 3.提交的结果展示
const addPage = () => {
  const { params } = useMatch('/evaluate/add/:customerId/:templateCode');
  const { templateCode = '', customerId } = params;

  console.log(customerId, 'customerId');
  const [searchParams] = useSearchParams();
  const relativeId = searchParams.get('relativeId');
  const relativeType = searchParams.get('relativeType');
  const templateComposeCode = searchParams.get('templateComposeCode');
  const remaindIndex = searchParams.get('remaindIndex');
  const parentRecordMainId = searchParams.get('parentRecordMainId');

  const [form] = Form.useForm();

  const { evaluateTemplateData = {}, loading, templateName } = useLoadFormTemplateData(templateCode, form);
  const locationParams = {
    templateCode,
    templateComposeCode,
    relativeId,
    relativeType,
    customerId,
    remaindIndex,
    parentRecordMainId,
  };
  const { data } = useGetLastRes(locationParams, form);

  const {
    submitAddEvaluteGroupContinue,
    submitAddEvaluteGroupReturn,
    submitAddEvalute,
  } = useSubmitAddForm(form, locationParams, evaluateTemplateData?.resDTO?.elementList);


  return (

    <div className="max-w-[620px] m-auto py-[20px]">
      <Skeleton loading={loading} paragraph={{ rows: 10 }} active>
        <div className="mb-[90px]">
          <div className="mt-[20px]">
            {evaluateTemplateData?.resDTO?.elementList &&
              <EvaluateForm form={form} templateCode={templateCode} templateName={templateName}
                            elementList={evaluateTemplateData?.resDTO?.elementList} />}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full flex items-center justify-center bg-white p-5">
          <div className="w-full flex-center">
            {
              templateComposeCode ? (<> <Button type="primary" className="mr-10 w-[240px] h-[48px]"
                                                onClick={submitAddEvaluteGroupReturn}>提交并返回</Button>
                  {Number(remaindIndex) > 1 && <Button type="primary" ghost className="mr-10 w-[240px] h-[48px]"
                                                       onClick={submitAddEvaluteGroupContinue}>继续填写</Button>}</>) :
                <Button type="primary" className="mr-10 w-[240px] h-[48px]" onClick={submitAddEvalute}>提交</Button>
            }
          </div>


        </div>
      </Skeleton>
    </div>


  );
};

export default addPage;
