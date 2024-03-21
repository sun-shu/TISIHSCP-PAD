import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useFloorSimpleData } from './hooks/useFloorSimpleData';

const FloorSelect = ({ value, onChange, buildingId }) => {
  const { data = [], loading } = useFloorSimpleData(buildingId);
  const options = data?.map(item => ({ value: item.floorId, label: item.floor }));

  return (<>
    <Select placeholder="楼层" loading={loading}
            style={{ width: '100%', minWidth: '150px' }}
            suffixIcon={<CaretDownOutlined className="pointer-events-none	" />}
            options={options} value={value} onChange={onChange} />
  </>);
};

export default FloorSelect;