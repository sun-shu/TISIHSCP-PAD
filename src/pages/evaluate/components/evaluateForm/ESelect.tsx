import { Input, Select } from 'antd';
import { forwardRef } from 'react';
import { OptionTypeEnum } from '@/pages/evaluate/components/evaluateForm/enums/OptionTypeEnum';

const ESelect = ({ selectProps, ...props }) => {
  const { value = {}, onChange, optionType, options } = props;

  const handleOnChange = (value, option) => {
    console.log(value, option, 'value');
    onChange({
      value,
      optionType: option.optionType,
    });
  };

  return (
    <div className="flex gap-[20px] h-[34px]">
      <Select
        className="w-[140px]"
        defaultValue="lucy"
        {...selectProps}
        onChange={handleOnChange}
        labelInValue
        value={value.value}
      >{
        options.map((item) => {
          return <Select.Option value={item.value} optionType={item.optionType}>{item.label}</Select.Option>;
        })
      }


      </Select>
      {value.optionType == OptionTypeEnum.OTHER && <Input placeholder="补充描述" />}
    </div>
  );
};

export default ESelect;
