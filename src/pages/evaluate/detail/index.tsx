import EvaluateForm from '@/pages/evaluate/components/evaluateForm';
import { useMatch } from 'umi';
import { Button, Form } from 'antd';
import React from 'react';

import useLoadDetailData from '@/pages/evaluate/detail/hooks/useLoadDetailData';

const DetailPage = () => {
  const { params } = useMatch('/evaluate/detail/:templateCode/:recordMainId');
  const { recordMainId = '28030065433N', templateCode } = params;

  console.log('DetailPage', params);

  const [form] = Form.useForm();

  const { data, loading } = useLoadDetailData(form, {
    recordMainId,
  });


  return (
    <div className="max-w-[620px] m-auto py-[20px]">
      <div className="mb-[90px]">
        <div className="mt-[20px]">
          <EvaluateForm form={form} templateCode={templateCode} />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex items-center justify-center bg-white p-5">
        <div className="w-full flex-center">
          
        </div>


      </div>
    </div>
  );
};

export default DetailPage;
