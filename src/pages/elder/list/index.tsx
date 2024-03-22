import { history } from '@@/core/history';
import {
  CaretDownOutlined, CloseCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Affix, Avatar, Button, ConfigProvider, Form, Input, Select, Skeleton } from 'antd';
import EvaluateIcon from '@/assets/icon/evalute.png';
import LevelOfCareTag from '@/components/LevelOfCareTag';
import useLoadCustomerList from '@/pages/elder/list/hooks/useLoadCustomerList';
import ManAvatar from '@/assets/avatar/man.png';
import WomanAvatar from '@/assets/avatar/woman.png';
import React, { useRef, useState } from 'react';
import { SexDescConst } from '@/const/SexDescConst';
import EmptyDataContainer from '@/components/exception/EmptyDataContainer';
import { SexEnum } from '@/enums/SexEnum';
import dayjs from 'dayjs';
import BuildingSelect from '@/components/entitySelects/BuildingSelect';
import FloorSelect from '@/components/entitySelects/FloorSelect';
import RoomSelect from '@/components/entitySelects/RoomSelect';
import BedSelect from '@/components/entitySelects/BedSelect';

import { debounce } from 'lodash';


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

              <Avatar src={item?.imageUrl}
                      icon={<img src={item.gender === SexEnum.FEMALE ? WomanAvatar : ManAvatar} width={104}
                                 height={104} />}
                      shape="square"
                      className="w-[104px] h-[104px] border-none bg-white">

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
                    入住日期：{item?.checkInTime ? dayjs(item?.checkInTime).format('YYYY-MM-DD') : '-'}
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

const SearchComponent = ({ searchElder }) => {
  const [form] = Form.useForm();
  const [buildingId, setBuildingId] = useState('');
  const [floorId, setFloorId] = useState('');
  const [roomId, setRoomId] = useState('');

  const resetFilter = () => {
    // 重置筛选条件
    //  重置列表数据
    console.log('resetFilter');
    setBuildingId('');
    setFloorId('');
    setRoomId('');
    form.resetFields();
    searchElder({
      currentPage: 0,
      pageSize: 10,
      total: 0,
    });
  };

  const debounceFn = debounce((values) => searchElder({
    currentPage: 0,
    pageSize: 10,
    total: 0,
  }, values), 800);

  const onValuesChange = (changedValues, allValues) => {
    // 关键字输入 使用防抖技术
    if (changedValues.keyword) {
      return debounceFn({
        buildingId: allValues.buildingId,
        floorId: allValues.floorId,
        roomId: allValues.roomId,
        bedId: allValues.bedId,
        name: allValues.keyword,
      });
    }

    if (changedValues.buildingId) {
      form.setFieldsValue({
        floorId: '',
        roomId: '',
        bedId: '',
      });
    }

    if (changedValues.floorId) {
      form.setFieldsValue({
        roomId: '',
        bedId: '',
      });
    }
    if (changedValues.roomId) {
      form.setFieldsValue({
        bedId: '',
      });
    }

    searchElder({
      currentPage: 0,
      pageSize: 10,
      total: 0,
    }, {
      buildingId: allValues.buildingId,
      floorId: allValues.floorId,
      roomId: allValues.roomId,
      bedId: allValues.bedId,
      name: allValues.keyword,
    });
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
          <Form form={form} onValuesChange={onValuesChange}>
            <Form.Item name="keyword">
              <Input
                prefix={
                  <SearchOutlined className="site-form-item-icon mr-[10px]" />
                }
                placeholder="搜索"
                allowClear
                size="large"
                className="rounded-[100px] pd-[4px] mb-[10px]"
              />
            </Form.Item>


            <div className="flex gap-[10px] justify-between">
              <div className="grid grid-cols-4 gap-[10px] ">
                <Form.Item name="buildingId" className="max-w-[150px]">
                  <BuildingSelect
                    onChange={(e) => {
                      console.log('BuildingSelect', e);
                      setBuildingId(e);
                      form.setFieldsValue({
                        floorId: '',
                        roomId: '',
                        bedId: '',
                      });
                    }}
                  />
                </Form.Item>
                <Form.Item name="floorId" className="max-w-[150px]">
                  <FloorSelect
                    onChange={(e) => {
                      setFloorId(e);
                      form.setFieldsValue({
                        roomId: '',
                        bedId: '',
                      });
                    }} buildingId={buildingId} />
                </Form.Item>
                <Form.Item name="roomId" className="max-w-[150px]">
                  <RoomSelect onChange={(e) => {
                    setRoomId(e);
                    form.setFieldsValue({
                      bedId: '',
                    });

                  }} floorId={floorId} />
                </Form.Item>
                <Form.Item name="bedId" className="max-w-[150px]">
                  <BedSelect onChange={(e) => {
                  }} roomId={roomId} />
                </Form.Item>
              </div>


            </div>

            <div className="text-right" onClick={resetFilter}><CloseCircleOutlined className="mr-[8px] mt-[10px]"
            />清除筛选条件
            </div>
          </Form>
        </div>
      </ConfigProvider>
    </>
  );
};

const ElderListPage = () => {
  const containerRef = useRef(null);
  const { data = {}, loading, run } = useLoadCustomerList(containerRef);


  return (
    <>
      <div className=" text-center flex  flex-col items-center h-full ">
        <div className="h-full ">
          <Affix offsetTop={50}>
            <div className="bg-gray-F6 pt-[10px]">

              <div className="flex flex-col items-start justify-start text-[1.75rem] mb-[10px]">
                <div className="relative leading-[2.63rem] font-semibold">
                  长者列表
                </div>
                <div className="relative text-[0.75rem] tracking-[0.05em] leading-[1.13rem]">
                  共有{data.totalNum}位长者
                </div>
              </div>

              <div className=" border-b-[1px] border-solid border-bg- pb-[20px] mb-[20px]">
                <SearchComponent searchElder={run} />
              </div>
            </div>
          </Affix>
          <div className="overflow-y-scroll h-[800px]" ref={containerRef}>
            <EmptyDataContainer data={data.list} emptyClassName="h-full mt-[30%]" loading={loading}>
              <ListComponent data={data.list}></ListComponent>
            </EmptyDataContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElderListPage;
