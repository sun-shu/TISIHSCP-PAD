import { Input, Select } from 'antd';
import { forwardRef } from 'react';
import { OptionTypeEnum } from '@/pages/evaluate/components/evaluateForm/enums/OptionTypeEnum';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

const ESelect = ({ selectProps, ...props }) => {
  const { value = {}, onChange, options, changeElementVisible } = props;

  const handleOnChange = (value, option) => {
    console.log(value, option, 'value');
    onChange({
      value,
      optionType: option.optionType,
    });

    console.log(option, 'option.optionIsShow');
    if ([ElementVisibleEnum.HIDE, ElementVisibleEnum.SHOW].includes(option.optionIsShow) && option.nextElementId) {
      changeElementVisible(option.nextElementId, option.optionIsShow);
    }
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
          return <Select.Option value={item.value} {...item}>{item.label}</Select.Option>;
        })
      }


      </Select>
      {value.optionType == OptionTypeEnum.OTHER && <Input placeholder="补充描述" />}
    </div>
  );
};

export default ESelect;
