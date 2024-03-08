import { Checkbox, Input, Radio, Space } from 'antd';
import React from 'react';
import { OptionTypeEnum } from '@/pages/evaluate/components/evaluateForm/enums/OptionTypeEnum';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

const ERadio = (props) => {
  const { value = {}, onChange, options, changeElementVisible } = props;

  console.log(props, 'props');
  const handleOnChange = (e, option) => {
    const selectedOption = options.find(option => option.value === e.target.value);
    console.log(e, ' handleOnChange value');
    onChange({
      value: e.target.value,
      optionType: selectedOption.optionType,
    });
 
    if ([ElementVisibleEnum.HIDE, ElementVisibleEnum.SHOW].includes(selectedOption.optionIsShow) && selectedOption.nextElementId) {
      changeElementVisible(selectedOption.nextElementId, selectedOption.optionIsShow);
    }
  };
  return (
    <div>
      <Radio.Group className="w-full" onChange={handleOnChange} value={value.value}>
        <Space direction="vertical" className="w-full">
          {
            options?.map((item) => {
              console.log(item, 'item');
              if (item.optionType === OptionTypeEnum.OTHER) {
                return (
                  <Radio value={item.value} className="w-full flex flex-1 relative">
                      <span>
                        其他
                        {value.optionType === OptionTypeEnum.OTHER ? (
                          <>
                            ：
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
                  </Radio>);
              }
              return <Radio value={item.value}>{item.label}</Radio>;
            })
          }

        </Space>
      </Radio.Group>
    </div>
  );
};

export default ERadio;
