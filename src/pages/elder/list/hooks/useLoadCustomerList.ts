import { useRequest } from '@@/exports';
import { getCustomerListWechat } from '@/api/customer';

const useLoadCustomerList = () => {
  const { data: customerList, loading, run } = useRequest(() => {
    return getCustomerListWechat({});
  });

  return {
    customerList,
  };
};

export default useLoadCustomerList;