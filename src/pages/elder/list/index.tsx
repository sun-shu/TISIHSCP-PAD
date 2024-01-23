import { history } from '@@/core/history';
import {
  CaretDownOutlined,
  ProfileFilled,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Affix, Avatar, Button, ConfigProvider, Input, Select } from 'antd';

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

const SearchComponent = () => {
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
        <div className=" min-w-[620px]">
          <Input
            prefix={
              <SearchOutlined className="site-form-item-icon mr-[10px]" />
            }
            placeholder="搜索"
            allowClear
            suffix={
              <Button type="primary" className="rounded-3xl">
                搜索
              </Button>
            }
            size="large"
            className="rounded-[100px] pd-[4px] mb-[10px]"
          />

          <div className="flex gap-[10px] justify-between">
            <Select
              defaultValue="lucy"
              style={{ width: '100%' }}
              suffixIcon={<CaretDownOutlined className="pointer-events-none	" />}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: '100%' }}
              suffixIcon={<CaretDownOutlined className="pointer-events-none	" />}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: '100%' }}
              suffixIcon={<CaretDownOutlined className="pointer-events-none	" />}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: '100%' }}
              suffixIcon={<CaretDownOutlined className="pointer-events-none	" />}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </div>
        </div>
      </ConfigProvider>
    </>
  );
};

const ElderListPage = () => {
  return (
    <>
      <div className=" text-center flex justify-center flex-col items-center">
        <div>
          <Affix offsetTop={50}>
            <div className="bg-gray-F6 pt-[10px]">
              <div className="flex flex-col items-start justify-start text-[1.75rem] mb-[10px]">
                <div className="relative leading-[2.63rem] font-semibold">
                  长者列表
                </div>
                <div className="relative text-[0.75rem] tracking-[0.05em] leading-[1.13rem]">
                  共有 215位长者
                </div>
              </div>

              <div className=" border-b-[1px] border-solid border-bg- pb-[20px] mb-[20px]">
                <SearchComponent />
              </div>
            </div>
          </Affix>
          <ListComponent></ListComponent>
        </div>
      </div>
    </>
  );
};

export default ElderListPage;
