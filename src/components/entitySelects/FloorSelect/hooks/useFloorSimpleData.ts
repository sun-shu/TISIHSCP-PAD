import { getFloorList } from '@/api/floor';
import { useRequest } from '@@/exports';

// TODO by sunshu 如果一个页面上有两个通用组件，那么这两个组件都会调用这个接口，这样会导致重复请求，所以需要在这里做一个缓存
export const useFloorSimpleData = (buildingId: string) => {
  console.log('useFloorSimpleData', buildingId);
  const { data, loading } = useRequest(() => {
    return getFloorList({
      parentId: buildingId,
    });
  }, {
    ready: !!buildingId,
    refreshDeps: [buildingId],
  });
  return {
    data,
    loading,
  };
};

