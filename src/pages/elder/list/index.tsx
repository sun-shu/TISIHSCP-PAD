import { history } from '@@/core/history';
import {
  CaretDownOutlined, CloseCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Affix, Avatar, Button, ConfigProvider, Input, Select } from 'antd';
import EvaluateIcon from '@/assets/icon/evalute.png';
import LevelOfCareTag from '@/components/LevelOfCareTag';
import useLoadCustomerList from '@/pages/elder/list/hooks/useLoadCustomerList';
import ManAvatar from '@/assets/avatar/man.png';
import React from 'react';
import { SexDescConst } from '@/const/SexDescConst';

const ListComponent = ({ data = [] }) => {
  console.log('data', data);
  const handleGoToDetailClick = (customerId) => {
    history.push(`/elder/detail?customerId=${customerId}`);
  };

  const handleGoToEvaluateTemplateClick = (customerId) => {
    history.push('/evaluate/template-list?customerId=' + customerId);
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

        {data?.map((item) => (
          <div
            className="relative rounded bg-white w-full flex flex-row items-center justify-between py-[0.63rem] pr-[1.25rem] mb-[20px] pl-[0.63rem] box-border cursor-pointer text-left text-[1.25rem] text-darkslategray font-px"
            onClick={() => {
              handleGoToDetailClick(item?.customerId);
            }}
          >
            <div className=" flex flex-1 flex-row items-center justify-start gap-[20px] max-w-[620px]">

              <Avatar src={item?.imageUrl} icon={<img src={ManAvatar} width={104} height={104} />}
                      shape="square"
                      className="w-[104px] h-[104px] border-none">

              </Avatar>

              <div
                className=" flex  flex-col justify-between py-[10px] box-border flex-none min-w-[120px]">
                <div className="relative  font-semibold line-clamp-1">
                  {item?.name}
                </div>
                <div className="text-base font-semibold">
                  {SexDescConst[item?.gender]}
                </div>
                <div className="text-base font-semibold"> {item?.age}岁</div>

              </div>
              <div className="flex flex-col items-start justify-start  py-[10px] gap-[0.63rem] text-[1rem] ">
                <LevelOfCareTag level={item?.nurseGrade} />
                <div className="relative tracking-[0.05em] leading-[1.5rem] font-semibold line-clamp-1 max-w-[150px]">
                  {item?.bedName}
                </div>
                <div className="flex flex-row items-center justify-start text-[0.75rem]">
                  <div className="relative tracking-[0.05em] leading-[1.13rem] line-clamp-1">
                    入住日期：2023-12-02
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[1.25rem] text-[0.88rem] text-fg-main-bluegreen">
              <Button
                className="px-[10px] py-[4px] flex"
                type="primary"
                onClickCapture={() => {

                  handleGoToEvaluateTemplateClick(item?.customerId);
                }}
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
  const { customerList = [] } = useLoadCustomerList();

  console.log('customerList', customerList);

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
                  共有{customerList.length}位长者
                </div>
              </div>

              <div className=" border-b-[1px] border-solid border-bg- pb-[20px] mb-[20px]">
                <SearchComponent />
              </div>
            </div>
          </Affix>
          <ListComponent data={customerList}></ListComponent>
        </div>
      </div>
    </>
  );
};

export default ElderListPage;
