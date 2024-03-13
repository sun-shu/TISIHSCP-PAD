import { useModel } from '@@/exports';
import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

const BuildingSelect = ({ value, onChange, ...componentProps }) => {
  const { run, buildingListForSelect } = useModel('buildingModel');
  // const buildingListForSelect = [];

  useEffect(() => {
    run();
  }, []);
  return (<>
    {buildingListForSelect}
    <Select placeholder="楼宇"
            style={{ width: '100%' }} suffixIcon={<CaretDownOutlined className="pointer-events-none	" />}
            options={buildingListForSelect} value={value} onChange={onChange} {...componentProps}></Select></>);
};

export default BuildingSelect;