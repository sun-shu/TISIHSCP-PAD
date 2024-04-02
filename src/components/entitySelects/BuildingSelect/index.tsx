import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useBuildingSimpleData } from './hooks/useBuildingSimpleData';

const BuildingSelect = ({ value, onChange }) => {
  const { data = [], loading } = useBuildingSimpleData();
  const options = data?.map(item => ({ value: item.buildingId, label: item.building }));

  return (<>
    <Select placeholder="楼栋" loading={loading}
            notFoundContent="暂无数据"

            style={{ width: '100%', minWidth: '150px' }}
            suffixIcon={<CaretDownOutlined className="pointer-events-none	" />}
            options={options} value={value} onChange={onChange} />
  </>);
};

export default BuildingSelect;