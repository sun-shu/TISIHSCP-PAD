import { Checkbox, Input, Space } from 'antd';
import React from 'react';
import { OptionTypeEnum } from '@/pages/evaluate/components/evaluateForm/enums/OptionTypeEnum';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

const ECheckBox = (props) => {
  const { checked = [], onChange, options, changeElementVisible } = props;

  const handleOnChange = (newValue) => {
    onChange(newValue.map(item => {
      const selectedOption = options.find(option => option.value.toString() == item);
      return {
        value: item,
        optionType: selectedOption?.optionType,
      };
    }));
  };

  const handleOneItemChange = (e) => {
    const selectedOption = options.find(option => option.value.toString() == e.target.value);
    if ([ElementVisibleEnum.HIDE, ElementVisibleEnum.SHOW].includes(selectedOption.optionIsShow) && selectedOption.nextElementId) {
      changeElementVisible(selectedOption.nextElementId, selectedOption.optionIsShow);
    }
  };

  return (
    <div>
      <Checkbox.Group className="w-full" onChange={handleOnChange} checked={checked.map(item => item.value)}>
        <Space direction="vertical" className="w-full">


          {options?.map((item) => {
            if (item.optionType === OptionTypeEnum.OTHER) {
              return (<Checkbox value={item.value.toString()} onChange={handleOneItemChange}
                                className="w-full flex flex-1 relative"
                                key={item.value}>
                        <span>
                          其他
                          {checked.some(item => item.optionType === OptionTypeEnum.OTHER) ? (
                            <> ：
                              <Input
                                style={{
                                  width: '80%',
                                  marginLeft: 10,
                                  borderBottom: '1px solid #323746',
                                }}
                                variant="borderless"
                                className=" absolute rounded-none flex-1"
                              />
                            </>
                          ) : null}
                        </span>
              </Checkbox>);
            }

            return <Checkbox value={item.value.toString()} key={item.value}>{item.label} </Checkbox>;
          })}
        </Space>
      </Checkbox.Group>
    </div>
  );
};

export default ECheckBox;
