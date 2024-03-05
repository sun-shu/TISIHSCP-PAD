import ProgressBar from '@/components/ProgressBar';
import EvaluateForm from '@/pages/evaluate/components/evaluateForm';
import { useMatch } from 'umi';
import { history, useRequest } from '@@/exports';
import { getEvaluateTemplateData, TemplateDataResultDTO } from '@/api/evaluateTemplate';
import { Button, Form } from 'antd';
import React from 'react';


const addPage = () => {
  //以下这些逻辑可以抽取到hooks中,分为 上一次提交的数据回显Hook，模板数据加载Hook，表单提交Hook
  const { params } = useMatch('/evaluate/add/:templateCode');
  const { templateCode = '28030065433N' } = params;
  const [form] = Form.useForm();


  const { data: templateData = {}, error, loading, run }: {
    data: TemplateDataResultDTO,
    [property: string]: any
  } = useRequest(() => {
    return getEvaluateTemplateData({
      templateCode: templateCode,
    });
  });

  // 提交并返回点击
  const handleSaveClick = () => {
    // 这里处理form
    history.replace('/evaluate/template-list-composite');
  };
  // 继续填写点击
  const handleContinueClick = () => {
    //这里处理form
    form.getFieldValue();
  };

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
        <EvaluateForm elementList={templateData?.resDTO?.elementList} form={form} />
      </div>

      {/* 表单提交按钮 */}
      <div className="fixed bottom-0 left-0 w-full flex items-center justify-center bg-white p-5">
        <div>
          <Button type="primary" className="mr-10" onClick={handleSaveClick}>提交并返回</Button>
          <Button onClick={handleContinueClick}>继续填写</Button>
        </div>
      </div>
    </div>
  );
};

export default addPage;
