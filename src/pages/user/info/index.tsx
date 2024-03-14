import { useModel } from 'umi';
import { Button } from 'antd';

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
            共负责评估15位长者
          </div>
        </div>
        <div className="w-[620px] p-5 bg-white rounded justify-start items-center gap-10 inline-flex">
          <img
            className="w-[110px] h-[110px] rounded"
            src="https://via.placeholder.com/110x110"
          />
          <div className="justify-start items-center gap-10 flex">
            <div className="text-zinc-700 text-[28px] font-semibold font-['PingFang SC'] leading-[42px]">
              {currentUser.actName}
            </div>
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-[265px] justify-between items-center inline-flex">
                <div
                  className="text-zinc-700 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">
                  女 30岁
                </div>
                <div
                  className="text-zinc-700 text-base font-semibold font-['PingFang SC'] leading-normal tracking-wide">
                  一级评估师
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
