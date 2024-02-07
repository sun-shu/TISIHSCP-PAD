import { Checkbox, Input, Space } from 'antd';
import React from 'react';

const ECheckBox = (props) => {
  console.log(props, 'props');
  return (
    <div>
      <Checkbox.Group {...props}>
        <Space direction="vertical"></Space>
      </Checkbox.Group>
      <Input placeholder="补充描述" />
    </div>
  );
};

export default ECheckBox;
