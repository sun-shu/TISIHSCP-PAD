import { useRequest } from '@@/exports';
import { getBedList } from '@/api/bed';

// TODO by sunshu 如果一个页面上有两个通用组件，那么这两个组件都会调用这个接口，这样会导致重复请求，所以需要在这里做一个缓存
export const useBedSimpleData = (roomId) => {
  const { data, loading } = useRequest(() => {
    return getBedList({
      roomId: roomId,
    });
  }, {
    ready: roomId,
    refreshDeps: [roomId],
  });

  return {
    data,
    loading,
  };
};

