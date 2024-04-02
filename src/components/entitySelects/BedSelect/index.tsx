import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useBedSimpleData } from './hooks/useBedSimpleData';

const BuildingSelect = ({ value, onChange, roomId }) => {
  const { data = [], loading } = useBedSimpleData(roomId);
  const options = data?.map(item => ({ value: item.bedId, label: item.bedName }));

  return (
    <>
      <Select placeholder="床位" loading={loading}
              notFoundContent="暂无数据"
              style={{ width: '100%', minWidth: '150px' }}
              suffixIcon={<CaretDownOutlined className="pointer-events-none	" />}
              options={options} value={value} onChange={onChange} />
    </>
  );
};

export default BuildingSelect;