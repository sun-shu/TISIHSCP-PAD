import { useModel } from 'umi';
import { Button, Avatar } from 'antd';
import { SexEnum } from '@/enums/SexEnum';
import WomanAvatar from '@/assets/avatar/woman.png';
import ManAvatar from '@/assets/avatar/man.png';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const UserInfoPage = () => {
  const { initialState = {}, loading, error, refresh, setInitialState } =
    useModel('@@initialState');

  const { loginOut } =
    useModel('userModel');

  const { currentUser = {} } = initialState;
  console.log('initialState', initialState);
  return (
    <div className="text-center pt-[10px] ">
      <div className="w-[620px] h-[230px] flex-col justify-start items-start gap-5 inline-flex">
        <div className="flex-col justify-start items-start flex">
          <div className="text-zinc-700 text-[28px] font-semibold font-['PingFang SC'] leading-[42px]">
            评估师信息
          </div>
          <div className="text-zinc-700 text-xs font-normal font-['PingFang SC'] leading-[18px] tracking-wide">
            共负责评估{currentUser?.customerCnt}位长者
          </div>
        </div>
        <div className="w-[620px] p-5 bg-white rounded justify-start items-center gap-10 inline-flex">
          <Avatar src={currentUser?.iconUrl}
                  icon={<UserOutlined />}
                  shape="square"
                  size={110}
                  className="w-[104px] h-[104px] border-none">

          </Avatar>

          <div className="justify-start items-center gap-10 flex">
            <div className="text-zinc-700 text-[28px] font-semibold font-['PingFang SC'] leading-[42px]">
              {currentUser?.actName}
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-[265px] justify-between items-center inline-flex">
                <div
                  className="text-zinc-700 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">
                </div>
                <div
                  className="text-zinc-700 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">
                  {currentUser?.employeeTypeName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[30%] text-center w-full">
        <Button onClickCapture={loginOut} type="primary">退出登录</Button>

      </div>
    </div>
  );
};

export default UserInfoPage;
