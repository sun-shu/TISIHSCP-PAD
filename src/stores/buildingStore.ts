// buildingStore.ts
import create from 'zustand';
import { getBuildingList } from '@/api/building';


export const useBuildingStore = create(set => ({
  data: null,
  error: null,
  loading: false,

  fetchData: async () => {
    set({ loading: true });
    getBuildingList().then((data) => {
      set({ data: data.data, loading: false });
    }).finally(() => {
      set({ loading: false, data: [] });
    });
  },
}));