import CustomTag from '@/components/CustomTag';
import { Affix, Image } from 'antd';
import { useEffect, useState } from 'react';

// import ElderApi from '@/api/elder';
import React from 'react';

import useLoadCustomer from './useLoadCustomer';
import { CustomerWechatDTO } from '@/api/customer/getCustomerWechat.interface';

const ElderInfoCardCol = (props: {
  data: CustomerWechatDTO
}) => {
  const { data } = props;

  return (
    <>
      <div className="w-[620px] h-[100px] px-5 py-2.5 bg-white rounded justify-start items-center gap-10 inline-flex">
        <img
          className="w-20 h-20 rounded"
          src="https://via.placeholder.com/80x80"
        />
        <div className="h-20 py-2.5 flex-col justify-between items-center inline-flex">
          <div className="text-zinc-700 text-xl font-semibold  leading-[30px] line-clamp-1">
            {data?.name}
          </div>
          <CustomTag text="2级照护" />

        </div>
        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
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
        <Image
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dce42f789df49b5af479478de5636097f0854fab14fd6361763804ab22b681db?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce42f789df49b5af479478de5636097f0854fab14fd6361763804ab22b681db?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce42f789df49b5af479478de5636097f0854fab14fd6361763804ab22b681db?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce42f789df49b5af479478de5636097f0854fab14fd6361763804ab22b681db?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce42f789df49b5af479478de5636097f0854fab14fd6361763804ab22b681db?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce42f789df49b5af479478de5636097f0854fab14fd6361763804ab22b681db?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce42f789df49b5af479478de5636097f0854fab14fd6361763804ab22b681db?apiKey=f1bf64e0d2db4c63826b232cb206440e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce42f789df49b5af479478de5636097f0854fab14fd6361763804ab22b681db?apiKey=f1bf64e0d2db4c63826b232cb206440e&"
          className="aspect-square object-contain object-center w-40 overflow-hidden self-center"
          alt="description"
        />
        <span className="justify-between items-stretch self-stretch flex gap-4 mt-2.5">
          <div className=" text-center text-xl font-semibold leading-8 line-clamp-1">
            {data?.name}
          </div>
          <CustomTag text="2级照护" />
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
    </>
  );
};

export default ElderDetailLayout;
