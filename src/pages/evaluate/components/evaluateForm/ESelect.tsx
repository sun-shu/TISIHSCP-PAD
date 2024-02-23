import { Input, Select } from 'antd';

const ESelect = (props) => {
  const { value, onChange } = props;

  return (
    <div className="flex gap-[20px] h-[34px]">
      <Select
        className="w-[140px]"
        defaultValue="lucy"
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
          { value: 'other', label: '其他' },
        ]}
        {...props}
      />
      {value == 'other' && <Input placeholder="补充描述" />}
    </div>
  );
};

export default ESelect;
