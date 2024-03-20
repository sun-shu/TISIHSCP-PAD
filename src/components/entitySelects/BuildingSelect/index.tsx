import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useBuildingSimpleData } from './hooks/useBuildingSimpleData';

const BuildingSelect = ({ value = '', onChange, ...componentProps }) => {
  const { data = [], loading } = useBuildingSimpleData();
  console.log('BuildingSelect4', data, loading, value, '11');
  const options = data?.map(item => ({ value: item.buildingId, label: item.building }));

  return (<>
    <Select placeholder="楼栋"
            style={{ width: '100%', minWidth: '150px' }}
            suffixIcon={<CaretDownOutlined className="pointer-events-none	" />}
            options={options} value={value} onChange={onChange} {...componentProps}></Select>
  </>);
};

export default BuildingSelect;