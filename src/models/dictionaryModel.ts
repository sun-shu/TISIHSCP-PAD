// src/models/userModel.ts
import { DictionaryAPI } from '@/api/sys/dictionary';
import { useRequest } from 'ahooks';

const DictionaryModel = () => {
  console.log('DictionaryModel');
  const { data: dictionaryContent, loading: loading } = useRequest(async () => {
    const res = await DictionaryAPI.getDictionaryContent();

    const { baseTypes: dictionaryContent = {} } = res || {};
    return { dictionaryContent };
  });

  const getDictionaryItem = ([...types]) => {
    const result = [];
    types.forEach((type) => {
      const { [type]: dictionaryItem = [] } = dictionaryContent || {};
      result.push(...dictionaryItem);
    });
    return result;
  };

  return {
    dictionaryContent,
    loading,
    getDictionaryItem,
  };
};

export default DictionaryModel;
