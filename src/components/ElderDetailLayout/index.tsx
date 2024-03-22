import { Affix, Image, Skeleton, Avatar } from 'antd';

import React from 'react';

import useLoadCustomer from './useLoadCustomer';
import { CustomerWechatDTO } from '@/api/customer/getCustomerWechat.interface';
import LevelOfCareTag from '@/components/LevelOfCareTag';
import ManAvatar from '@/assets/avatar/man.png';
import WomanAvatar from '@/assets/avatar/woman.png';
import { SexEnum } from '@/enums/SexEnum';

interface ElderInfoCardColProps {
  data: CustomerWechatDTO;
  loading: boolean;
}

const ElderInfoCardCol = (props: ElderInfoCardColProps) => {
  const { data = {}, loading = false } = props;

  return (
    <>

      <div
        className="w-full h-[100px] px-5 py-2.5 bg-white rounded justify-between items-center gap-[10px] inline-flex">
        <Skeleton loading={loading} avatar active paragraph={{ rows: 1 }}>
          <Avatar src={data?.imageUrl}
                  icon={<img src={data?.gender === SexEnum.FEMALE ? WomanAvatar : ManAvatar} width={88} height={88}
                             className="bg-white" />}
                  shape="square"
                  className="w-[88px] h-[88px] border-none">

          </Avatar>

          <div className="text-zinc-700 text-xl font-semibold  leading-[30px] line-clamp-1 w-[150px]">
            {data?.name}
          </div>
          <div className="w-max">
            {data?.age}岁
          </div>
          <LevelOfCareTag level={data?.nurseGrade} />

          <div className="flex-col justify-start items-start gap-2.5 inline-flex max-w-[150px]">
            <div className="text-zinc-700 text-base font-semibold  leading-normal tracking-wide line-clamp-3">
              {data?.bedName}
            </div>
          </div>
        </Skeleton>
      </div>


    </>
  );
};

// 长者信息卡片-横屏
const ElderInfoCardRow = (props: {
  data: CustomerWechatDTO
  loading: boolean
}) => {

  const { data = {}, loading = false } = props;

  return (
    <>

      <div className="items-center rounded bg-white flex w-full flex-col  mx-auto p-5  w-[200px] ">
        <Skeleton loading={loading} avatar paragraph={{ rows: 4 }} active>
          <Avatar src={data?.imageUrl}
                  icon={<img src={data?.gender === SexEnum.FEMALE ? WomanAvatar : ManAvatar} width={160} height={160}
                             className="bg-white" />}
                  shape="square"
                  className="w-[160px] h-[160px] border-none">

          </Avatar>
          <span className="justify-between items-stretch self-stretch flex gap-4 mt-2.5">
          <div className=" text-xl font-semibold leading-8 line-clamp-1 text-left">
            {data?.name}
          </div>
          <LevelOfCareTag level={data?.nurseGrade} />
        </span>
          <div className=" text-base font-semibold leading-6 tracking-wider self-stretch  mt-2.5 line-clamp-3">
            {data?.bedName}
          </div>
          {/*<div className=" text-sm leading-5 tracking-wider self-stretch  mt-2.5">*/}
          {/*  本次评估开始时间：*/}
          {/*</div>*/}

          {/*<div className="text-left w-full">2023-12-02</div>*/}
        </Skeleton>
      </div>

    </>
  );
};

const ElderDetailLayout = ({ title = '', children, customerId, rowCardoffsetTop = 120 }) => {
  const { data = {}, loading } = useLoadCustomer(customerId);


  return (
    <>

      <div className="flex  items-stretch pb-12 justify-center gap-[20px] px-[70px]">
        <div className="landscape:block hidden pt-[20px] w-[200px]  bg-gray-F6">
          <Affix offsetTop={70}>
            {/*横屏-竖向*/}

            <ElderInfoCardRow data={data} loading={loading} />

          </Affix>
        </div>

        <div className="pt-[10px] bg-slate-50 self-stretch flex flex-col  items-start w-full ">
          <Affix offsetTop={50} className="w-full">
            <div
              className="text-[28px]
 font-semibold leading-10 pb-5 bg-gray-F6 pt-[10px] w-full"
            >
              {title}
            </div>
          </Affix>

          <div className="portrait:block hidden w-full">
            {/*因为这里传入的title可以是元素，不能判断需要多大的空间，所以这里交给调用者判断*/}
            <Affix offsetTop={rowCardoffsetTop}>
              <div className="bg-gray-F6 py-[20px]">
                {/*竖屏-横向*/}
                <ElderInfoCardCol data={data} loading={loading} />
              </div>
            </Affix>
          </div>

          {children}
        </div>
      </div>

    </>
  );
};

export default ElderDetailLayout;
