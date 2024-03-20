import { useRequest } from '@/.umi/exports';
import { getRoomList } from '@/api/room';

// TODO by sunshu 如果一个页面上有两个通用组件，那么这两个组件都会调用这个接口，这样会导致重复请求，所以需要在这里做一个缓存
export const useRoomSimpleData = (floorId: string) => {
  const { data, loading } = useRequest(() => {
    return getRoomList({
      parentId: floorId,
    });
  }, {
    ready: !!floorId,
    refreshDeps: [floorId],
  });
  return {
    data,
    loading,
  };
};

