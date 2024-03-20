import { useRequest } from '@@/exports';
import { checkTemplateAnswerDisplay } from '@/api/evalute';

const useGetLastRes = (locationParams) => {
  // TODO by sunshu 这里需要拉取到上一次填写的结果 赋值于表单
  const { data, loading } = useRequest(() => {
    return checkTemplateAnswerDisplay({
      ...locationParams,
    });
  });
 
  //拉取上一次评估结果，返回
  return {
    data,
  };
};

export default useGetLastRes;