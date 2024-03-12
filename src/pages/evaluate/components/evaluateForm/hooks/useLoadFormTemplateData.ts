import { useState } from 'react';
import { getEvaluateTemplateData } from '@/api/evaluateTemplate/index';
import { TemplateDataResultDTO } from '@/api/evaluateTemplate/seeTemplateData.interface';
import { useRequest } from '@@/exports';
import { FormInstance } from 'antd';
import _ from 'lodash';

const useLoadFormTemplateData = (templateCode, form: FormInstance) => {
  const { data: evaluateTemplateData = {}, error, loading, run }: {
    data: TemplateDataResultDTO;
    error: any;
    loading: boolean;
    run: any;
  } = useRequest(() => getEvaluateTemplateData({
    templateCode,
  }), {
    ready: !!templateCode,
    onSuccess: (result, params) => {
      form.validateFields({
        validateOnly: true,
      });
    },
  });

  const { templateName } = evaluateTemplateData.resDTO || {};

  return {
    evaluateTemplateData,
    templateName,
    error,
    loading,
    run,
  };
};

export default useLoadFormTemplateData;