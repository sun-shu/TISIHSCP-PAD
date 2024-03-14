import CustomTag from '@/components/CustomTag';
import { Affix, Image, Skeleton, Avatar } from 'antd';
import { useEffect, useState } from 'react';

// import ElderApi from '@/api/elder';
import React from 'react';

import useLoadCustomer from './useLoadCustomer';
import { CustomerWechatDTO } from '@/api/customer/getCustomerWechat.interface';
import LevelOfCareTag from '@/components/LevelOfCareTag';
import ManAvatar from '@/assets/avatar/man.png';

const ElderInfoCardCol = (props: {
  data: CustomerWechatDTO
}) => {
  const { data = {} } = props;

  return (
    <>
      <div
        className="w-[620px] h-[100px] px-5 py-2.5 bg-white rounded justify-between items-center gap-[10px] inline-flex">

        <Avatar src={data.imageUrl} icon={<img src={ManAvatar} width={88} height={88} />} shape="square"
                className="w-[88px] h-[88px] border-none">

        </Avatar>

        <div className="text-zinc-700 text-xl font-semibold  leading-[30px] line-clamp-1 w-[150px]">
          {data?.name}
        </div>
        <div className="w-max">
          {data.age}岁
        </div>
        <LevelOfCareTag level={data?.nurseGrade} />

        <div className="flex-col justify-start items-start gap-2.5 inline-flex max-w-[150px]">
          <div className="text-zinc-700 text-base font-semibold  leading-normal tracking-wide line-clamp-3">
            {data?.bedName}
          </div>
        </div>
      </div>
    </>
  );
};

// 长者信息卡片-横屏
const ElderInfoCardRow = (props: {
  data: CustomerWechatDTO
}) => {

  const { data } = props;

  return (
    <>
      <div className="items-center rounded bg-white flex w-full flex-col  mx-auto p-5  w-[200px] ">
        <Avatar src={data.imageUrl} icon={<img src={ManAvatar} width={160} height={160} />} shape="square"
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
      </div>
    </>
  );
};

const ElderDetailLayout = ({ title = '', children, customerId }) => {
  const { data = {}, loading } = useLoadCustomer(customerId);


  console.log('ElderDetailLayout', data, loading);
  return (
    <>
      <Skeleton loading={loading}>
        <div className="flex  items-stretch pb-12 justify-center gap-[20px] px-[70px]">
          <div className="landscape:block hidden pt-[20px] w-[200px]  bg-gray-F6">
            <Affix offsetTop={70}>
              {/*横屏-竖向*/}

              <ElderInfoCardRow data={data} />

            </Affix>
          </div>

          <div className="pt-[10px] bg-slate-50 self-stretch flex flex-col  items-start w-auto ">
            <Affix offsetTop={50} className="w-full">
              <div
                className="text-[28px]
 font-semibold leading-10 pb-5 bg-gray-F6 pt-[10px] w-full"
              >
                {title}
              </div>
            </Affix>

            <div className="portrait:block hidden">
              <Affix offsetTop={120}>
                <div className="bg-gray-F6 py-[20px]">
                  {/*竖屏-横向*/}
                  <ElderInfoCardCol data={data} />
                </div>
              </Affix>
            </div>

            {children}
          </div>
        </div>
      </Skeleton>
    </>
  );
};

export default ElderDetailLayout;
