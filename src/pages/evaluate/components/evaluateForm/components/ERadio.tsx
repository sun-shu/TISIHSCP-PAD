import { Checkbox, Input, Radio, Space } from 'antd';
import React from 'react';
import { OptionTypeEnum } from '@/pages/evaluate/components/evaluateForm/enums/OptionTypeEnum';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

const ERadio = (props) => {
  const { id, value = {}, onChange, options, changeElementVisible, item: config } = props;

  const handleOnChange = (e) => {
    const selectedOption = options.find(option => option.value?.toString() === e.target.value);

    const newValue = {
      ...config,
      optionValues: e.target.value,
      answer: config.optionType === OptionTypeEnum.OTHER ? value?.answer : '',
      elementId: config.id,
      optionType: selectedOption?.optionType,
    };

    onChange(newValue);
  };

  const handleOtherTextChange = (e) => {
    onChange({
      ...config,
      optionValues: value?.optionValues,
      answer: e.target.value,
      elementId: config.id,
      optionType: value?.optionType,
    });
  };

  return (
    <div id={id}>
      <Radio.Group className="w-full" onChange={handleOnChange} value={value?.optionValues}>
        <Space direction="vertical" className="w-full">
          {
            options?.map((item) => {
              if (item?.optionType === OptionTypeEnum.OTHER) {
                return (
                  <Radio value={item?.value?.toString()} className="w-full flex flex-1 relative">
                      <span>
                        其他
                        {value?.optionType === OptionTypeEnum.OTHER ? (
                          <>
                            ：
                            <Input
                              value={value?.answer}
                              onChange={handleOtherTextChange}
                              maxLength={100}
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
              return <Radio value={item?.value?.toString()}>{item?.label}</Radio>;
            })
          }

        </Space>
      </Radio.Group>
    </div>
  );
};

export default ERadio;
