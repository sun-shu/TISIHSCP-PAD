import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useRoomSimpleData } from './hooks/useRoomSimpleData';

const RoomSelect = ({ value, onChange, floorId }) => {
  const { data = [], loading } = useRoomSimpleData(floorId);
  const options = data?.map(item => ({ value: item.roomId, label: item.roomName }));

  return (<>
    <Select placeholder="房间" loading={loading}
            style={{ width: '100%', minWidth: '150px' }}
            suffixIcon={<CaretDownOutlined className="pointer-events-none	" />}
            options={options} value={value} onChange={onChange} />
  </>);
};

export default RoomSelect;