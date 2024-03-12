import { useRequest } from '@@/exports';
import { getCustomerWechat } from '@/api/customer/';

const useLoadCustomer = (customerId) => {
  const { loading, data, run } = useRequest(() => {
    return getCustomerWechat(customerId);
  }, {
    ready: !!customerId,
  });


  return {
    data,
    loading,
  };
};

export default useLoadCustomer;