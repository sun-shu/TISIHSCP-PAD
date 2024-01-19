import { ProfileFilled, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, ConfigProvider } from 'antd';
import { history } from 'umi';

const ListComponent = () => {
  const handleGoToDetailClick = () => {
    history.push('/elder/detail');
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeShadow: 'none',
              activeBorderColor: 'none',
              paddingInline: 0,
            },
            Select: {
              borderRadius: 4,
            },
          },
        }}
      >
        {' '}
        {Array.from(new Array(100)).map(() => (
          <div
            className="relative rounded bg-white w-full flex flex-row items-center justify-between py-[0.63rem] pr-[1.25rem] mb-[20px] pl-[0.63rem] box-border cursor-pointer text-left text-[1.25rem] text-darkslategray font-px"
            onClick={handleGoToDetailClick}
          >
            <div className="w-[22.38rem] flex flex-row items-center justify-start gap-[0.63rem]">
              <Avatar shape="square" size={64} icon={<UserOutlined />} />

              <div className="h-[5rem] flex flex-none flex-col items-center justify-between py-[0.63rem] px-[0rem] box-border flex-none">
                <span className="relative leading-[1.88rem] font-semibold">
                  郑文锦
                </span>
                <div className="relative rounded-[10px] bg-primary-D9 w-full h-[1.5rem] flex flex-row items-center justify-start py-[0rem] px-[0.63rem] box-border text-left text-[0.75rem] text-fg-main-bluegreen font-pingfang-sc">
                  <span className="relative tracking-[0.05em] leading-[1.13rem] text-primary">
                    2级照护
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.63rem] text-[1rem] flex-1">
                <div className="relative tracking-[0.05em] leading-[1.5rem] font-semibold">
                  1号楼-3层-301-1床
                </div>
                <div className="flex flex-row items-center justify-start text-[0.75rem]">
                  <div className="relative tracking-[0.05em] leading-[1.13rem]">
                    上次评估结果：2023-12-02
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[1.25rem] text-[0.88rem] text-fg-main-bluegreen">
              <Button
                className="px-[10px] py-[4px]"
                type="primary"
                ghost
                icon={
                  <SearchOutlined className="site-form-item-icon  font-bold " />
                }
              >
                长者详情
              </Button>
              <Button
                className="px-[10px] py-[4px]"
                type="primary"
                icon={
                  <ProfileFilled className="site-form-item-icon  font-bold " />
                }
              >
                评估模版
              </Button>
            </div>
          </div>
        ))}
      </ConfigProvider>
    </>
  );
};

export default ListComponent;
