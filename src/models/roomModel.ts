import userAPI from '@/api/sys/user';
import useAccountSecret from '@/hooks/sys/useAccountSecret';
import { useCookieState } from 'ahooks';
import { flushSync } from 'react-dom';
import { history, useModel, useRequest } from 'umi';
import { useEffect, useState } from 'react';
import { getBuildingList } from '@/api/building';
import { showScoreResult } from '@/api/evalute';

export default function roomModel() {
  const [buildingListForSelect, setBuildingListForSelect] = useState([]);

  // 单项评估结果评分
  const { data, loading, run } = useRequest(() => {
    return getBuildingList();
  }, {
    manual: true,
    onSuccess: (result, params) => {
      setBuildingListForSelect;
    },
  });

  return {
    buildingListForSelect,
  };
}
