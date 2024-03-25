import { DictionaryAPI } from '@/api/sys/dictionary';
import { useRequest } from '@@/exports';

const dictionaryModel = () => {
  console.log('DictionaryModel');
  const { data: dictionaryContent, loading: loading } = useRequest(async () => {
    const res = await DictionaryAPI.getDictionaryContent();

    const { baseTypes = {} } = res.data || {};
    return { data: baseTypes };
  });

  // 获取字典项的code-name-desc的映射 types: 字典类型数组 例如 ['sex', 'yesOrNo']
  // 例如：[[{code: '1', name: '男', desc: '男性'}, {code: '2', name: '女', desc: '女性'}], [{code: '1', name: '是', desc: '是'}, {code: '2', name: '否', desc: '否'}]]
  const getDictionaryItemsCodeNameDesc = ([...types]) => {
    const result = types.reduce((acc, type, index) => {
      const { [type]: dictionaryItem = [] } = dictionaryContent || {};
      acc[index] = {};
      dictionaryItem.forEach((item) => {
        acc[index][item.code] = item.name;
      });
      return acc;
    }, []);

    return result;
  };

  // 返回数据 获取字典项的label,value的对象组，一般用来做下拉框的数据源
  // 例如：[{label: '男', value: '1'}, {label: '女', value: '2'}]const getDictionaryItemsLabelValue = ([...types]) => {
  const getDictionaryItemsLabelValue = ([...types]) => {
    const result = types.reduce((acc, type, index) => {
      const { [type]: dictionaryItem = [] } = dictionaryContent || {};
      acc[index] = [];
      dictionaryItem.forEach((item) => {
        acc[index].push({
          label: item.name,
          value: item.code,
        });
      });
      return acc;
    }, []);

    return result;
  };

  return {
    dictionaryContent,
    loading,
    getDictionaryItemsCodeNameDesc,
    getDictionaryItemsLabelValue,
  };
};

export default dictionaryModel;
