import EmptyDataImg from '@/assets/empty-data.png';
import classnames from 'classnames';
import { ReactNode } from 'react';

const EmptyDataContainer = ({ data, children, emptyClassName }: {
  data: any[],
  children: ReactNode,
  emptyClassName: string
}) => {

  if (data && data.length) {
    return children;
  }

  const classNames = classnames(emptyClassName, 'flex-center flex-col w-full');
  return (
    <div className={classNames}>
      <img src={EmptyDataImg} alt="empty-data" className="h-[50%]" />
      <p className="text-gray-99 text-[14px] mt-[20px]">无相应结果</p>
    </div>
  );
};

export default EmptyDataContainer;