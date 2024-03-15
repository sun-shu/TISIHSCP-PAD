import EmptyDataImg from '@/assets/empty-data.png';
import classnames from 'classnames';
import { ReactNode } from 'react';
import { Skeleton, Spin } from 'antd';

const EmptyDataContainer = ({ data, children, emptyClassName, loading = false }: {
  data: any[],
  children?: ReactNode,
  emptyClassName?: string,
  loading?: boolean
}) => {

  if (data && data.length) {
    return children;
  }

  const classNames = classnames(emptyClassName, 'flex-center flex-col w-full');
  return (
    <div className="w-full">
      <Spin spinning={loading} delay={2}>

        <div className={classNames}>
          {!loading && (<><img src={EmptyDataImg} alt="empty-data" className="h-[50%] max-h-[100px]  max-w-[100px]" />
            <p className="text-gray-99 text-[14px] mt-[20px]">无相应结果</p></>)}
        </div>


      </Spin>

    </div>


  );
};

export default EmptyDataContainer;