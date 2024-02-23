import { Checkbox, Input, Space } from 'antd';
import React from 'react';

const ECheckBox = (props) => {
  console.log(props, 'props');
  const { value = [], onChange } = props;

  return (
    <div>
      <Checkbox.Group {...props} className="w-full">
        <Space direction="vertical" className="w-full">
          <Checkbox value={1}>Option A</Checkbox>
          <Checkbox value={2}>Option B</Checkbox>
          <Checkbox value={3}>Option C</Checkbox>
          <Checkbox value={4} className="w-full flex flex-1 relative">
            <span>
              其他
              {value.includes(4) ? (
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
          </Checkbox>
        </Space>
      </Checkbox.Group>
    </div>
  );
};

export default ECheckBox;
