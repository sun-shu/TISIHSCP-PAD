import { Checkbox, Input, Space } from 'antd';
import React from 'react';

import { OptionTypeEnum } from '@/pages/evaluate/components/evaluateForm/enums/OptionTypeEnum';
import { ElementVisibleEnum } from '@/pages/evaluate/components/evaluateForm/enums/ElementVisibleEnum';

// 这个组件有一个问题，显隐的时候，选择的值直接丢失了，需要重新选择一次
//TODO :需要做的尝试 把之前的代码恢复回来 看看是否是因为修改了数据结构导致的问题(已經測試了，之前就是這樣的)
const ECheckBox = (props) => {
  const { id, checked = {}, onChange, options, changeElementVisible, item: config } = props;

  const otherOptionId = options.find(option => option.optionType === OptionTypeEnum.OTHER)?.value?.toString();
  console.log(checked, 'checked');
  const handleOnChange = (newValue) => {

    const hasOther = newValue.some(item => item === otherOptionId);

    const data = {
      ...checked,
      optionValues: newValue.join(','),
      elementId: config.id,
      hasOther,
      answer: hasOther ? checked.answer : '',
    };

    onChange(data);
  };

  const handleOneItemChange = (e) => {
    const selectedOption = options.find(option => option.value.toString() == e.target.value);
    if ([ElementVisibleEnum.HIDE, ElementVisibleEnum.SHOW].includes(selectedOption.optionIsShow) && selectedOption.nextElementId) {
      changeElementVisible(selectedOption.nextElementId, selectedOption.optionIsShow);
    }
  };

  const handleOtherTextChange = (e) => {
    onChange({
      ...checked,
      answer: e.target.value,
    });
  };

  return (
    <div id={id}>
      <Checkbox.Group className="w-full" onChange={handleOnChange} checked={checked?.optionValues?.split(',')}>
        <Space direction="vertical" className="w-full">


          {options?.map((item) => {
            if (item.optionType === OptionTypeEnum.OTHER) {
              return (<Checkbox value={item.value.toString()} onChange={handleOneItemChange}
                                className="w-full flex flex-1 relative"
              >
                        <span>
                          其他
                          {checked.hasOther ? (
                            <> ：
                              <Input
                                style={{
                                  width: '80%',
                                  marginLeft: 10,
                                  borderBottom: '1px solid #323746',
                                }}
                                onChange={handleOtherTextChange}
                                variant="borderless"
                                className=" absolute rounded-none flex-1"
                              />
                            </>
                          ) : null}
                        </span>
              </Checkbox>);
            }

            return <Checkbox value={item.value.toString()} onChange={handleOneItemChange}
            >{item.label} </Checkbox>;
          })}
        </Space>
      </Checkbox.Group>
    </div>
  );
};

export default React.memo(ECheckBox);
