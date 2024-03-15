import { useRequest } from '@@/exports';
import { getCustomerListWechat } from '@/api/customer';

const useLoadCustomerList = () => {
  const { data: customerList, loading, run } = useRequest((name = '') => {
    return getCustomerListWechat({
      name,
    });
  });

  return {
    customerList,
    loading,
    run,
  };
};

export default useLoadCustomerList;