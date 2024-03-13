import { useRequest } from 'umi';
import { useEffect, useState } from 'react';
import { getBuildingList } from '@/api/building';

export default function buildingModel() {
  const [buildingListForSelect, setBuildingListForSelect] = useState();
  // 单项评估结果评分
  const { loading, run } = useRequest(getBuildingList, {
    manual: true,
    ready: !buildingListForSelect,
    cacheKey: 'buildingListForSelect',

    onSuccess: (result, params) => {
      setBuildingListForSelect(result);
    },
    onError: (error, params) => {
      console.log('error', error);
      setBuildingListForSelect([{}]);
    },
  });

  useEffect(() => {
    console.log('buildingModel1');

  }, []);
  return {
    run,
    buildingListForSelect,
    loading,
  };
}
