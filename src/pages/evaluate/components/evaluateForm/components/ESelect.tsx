import { Input, Select } from 'antd';
import { forwardRef } from 'react';
import { OptionTypeEnum } from '@/pages/evaluate/components/evaluateForm/enums/OptionTypeEnum';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

const ESelect = ({ selectProps, ...props }) => {
  const { value = {}, onChange, options, changeElementVisible, item: config } = props;

  const handleOnChange = (value, option) => {
    console.log(value, option, 'value');
    onChange({
      optionValues: value.value,
      answer: config.optionType === OptionTypeEnum.OTHER ? value.answer : '',
      elementId: config.id,
      optionType: option.optionType,
    });

    console.log(option, 'option.optionIsShow');
    if ([ElementVisibleEnum.HIDE, ElementVisibleEnum.SHOW].includes(option.optionIsShow) && option.nextElementId) {
      changeElementVisible(option.nextElementId, option.optionIsShow);
    }
  };

  const handleOtherTextChange = (e) => {
    onChange({
      optionValues: value.optionValues,
      answer: e.target.value,
      elementId: config.id,
      optionType: value.optionType,
    });
  };

  return (
    <div className="flex gap-[20px] h-[34px]">
      <Select
        className="w-[140px]"
        {...selectProps}
        onChange={handleOnChange}
        labelInValue
        value={value?.optionValues}
      >{
        options.map((item) => {
          return <Select.Option value={item.value} {...item}>{item.label}</Select.Option>;
        })
      }


      </Select>
      {value.optionType == OptionTypeEnum.OTHER && <Input onChange={handleOtherTextChange} />}
    </div>
  );
};

export default ESelect;
