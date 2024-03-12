import { history } from '@@/core/history';
import {
  CaretDownOutlined, CloseCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Affix, Avatar, Button, ConfigProvider, Input, Select } from 'antd';
import CustomTag from '@/components/CustomTag';
import EvaluateIcon from '@/assets/icon/evalute.png';
import Logo from '@/assets/logo.png';

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

        {Array.from(new Array(100)).map(() => (
          <div
            className="relative rounded bg-white w-full flex flex-row items-center justify-between py-[0.63rem] pr-[1.25rem] mb-[20px] pl-[0.63rem] box-border cursor-pointer text-left text-[1.25rem] text-darkslategray font-px"
            onClick={handleGoToDetailClick}
          >
            <div className="w-[22.38rem] flex flex-row items-center justify-start gap-[0.63rem]">
              <Avatar shape="square" size={80} icon={<UserOutlined />} />

              <div
                className=" flex flex-none flex-col justify-between py-[10px] box-border flex-none">
                <div className="relative  font-semibold">
                  郑文锦
                </div>
                <div className="text-base font-semibold">
                  男
                </div>
                <div className="text-base font-semibold"> 65岁</div>

              </div>
              <div className="flex flex-col items-start justify-start  py-[10px] gap-[0.63rem] text-[1rem] flex-1">
                <CustomTag text="2级照护"></CustomTag>
                <div className="relative tracking-[0.05em] leading-[1.5rem] font-semibold">
                  1号楼-3层-301-1床
                </div>
                <div className="flex flex-row items-center justify-start text-[0.75rem]">
                  <div className="relative tracking-[0.05em] leading-[1.13rem]">
                    入住日期：2023-12-02
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[1.25rem] text-[0.88rem] text-fg-main-bluegreen">
              <Button
                className="px-[10px] py-[4px] flex"
                type="primary"
                icon={<img src={EvaluateIcon} width={24} height={24} />
                }
              >
                评估
              </Button>
            </div>
          </div>
        ))}
      </ConfigProvider>
    </>
  );
};

const SearchComponent = () => {
  const resetFilter = () => {
    // 重置筛选条件
    //  重置列表数据
    console.log('resetFilter');
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
              placeholder="楼宇"
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
              placeholder="楼层"
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
              placeholder="房间号"
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
              placeholder="床位"
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
              placeholder="护理等级"
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

          <div className="text-right" onClick={resetFilter}><CloseCircleOutlined className="mr-[8px] mt-[10px]" />清除筛选条件
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
