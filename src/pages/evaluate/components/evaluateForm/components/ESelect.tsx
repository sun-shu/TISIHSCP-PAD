import { Input, Select } from 'antd';
import { forwardRef } from 'react';
import { OptionTypeEnum } from '@/pages/evaluate/components/evaluateForm/enums/OptionTypeEnum';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

const ESelect = ({ selectProps, ...props }) => {
  const { id, value = {}, onChange, options, changeElementVisible, item: config } = props;

  console.log('ESelect', props);
  const handleOnChange = (newValue, option) => {
    console.log(newValue, option, 'value');
    onChange({
      ...config,
      optionValues: newValue,
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
      ...config,
      optionValues: value.optionValues,
      answer: e.target.value,
      elementId: config.id,
      optionType: value.optionType,
    });
  };

  return (
    <div className="flex gap-[20px] h-[34px]" id={id}>
      <Select
        className="w-[140px]"
        {...selectProps}
        onChange={handleOnChange}
        value={value?.optionValues?.toString()}
      >{
        options.map((item) => {
          return <Select.Option {...item} value={item?.value.toString()}>{item?.label}</Select.Option>;
        })
      }


      </Select>
      {value.optionType == OptionTypeEnum.OTHER && <Input onChange={handleOtherTextChange} />}
    </div>
  );
};

export default ESelect;
