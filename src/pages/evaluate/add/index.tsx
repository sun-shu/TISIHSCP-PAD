import EvaluateForm from '@/pages/evaluate/components/evaluateForm';
import { useMatch } from 'umi';
import { Button, Form } from 'antd';
import React from 'react';
import useSubmitAddForm from './hooks/useSubmitAddForm';

const addPage = () => {
  const { params } = useMatch('/evaluate/add/:templateCode');
  const { templateCode = '28030065433N' } = params;
  const [form] = Form.useForm();

  const { submitAddFormReturn, submitAddFormContinue } = useSubmitAddForm(form);


  return (
    <div className="max-w-[620px] m-auto py-[20px]">
      <div className="mb-[90px]">

        <div className="mt-[20px]">
          <EvaluateForm form={form} templateCode={templateCode} />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex items-center justify-center bg-white p-5">
        <div>
          <Button type="primary" className="mr-10" onClick={submitAddFormReturn}>提交并返回</Button>
          <Button onClick={submitAddFormContinue}>继续填写</Button>
        </div>
      </div>
    </div>
  );
};

export default addPage;
