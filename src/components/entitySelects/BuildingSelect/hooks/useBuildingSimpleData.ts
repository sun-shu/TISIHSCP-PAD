import { useBuildingStore } from '@/stores/buildingStore';
import { useEffect } from 'react';
import { getBuildingList } from '@/api/building';
import { useRequest } from '@/.umi/exports';

// TODO by sunshu 如果一个页面上有两个通用组件，那么这两个组件都会调用这个接口，这样会导致重复请求，所以需要在这里做一个缓存
export const useBuildingSimpleData = () => {
  const { data, loading } = useRequest(getBuildingList);
  return {
    data,
    loading,
  };
};

