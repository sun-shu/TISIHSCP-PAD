import { Button, ConfigProvider, Input, Select } from 'antd';
import { CaretDownOutlined, CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';

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