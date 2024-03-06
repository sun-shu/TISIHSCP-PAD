import { CloseCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { forwardRef } from 'react';

const { TextArea } = Input;

const EInput = (props) => {
  console.log(props, 'EInput props');
  return (
    <Input
      placeholder={'请填写'}
      allowClear={{
        clearIcon: (
          <CloseCircleOutlined
            style={{
              color: '#5E5E5E',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          />
        ),
      }}
      {...props}
    />
  );
};

const ETextArea = (props) => {
  return (
    <TextArea
      placeholder={'请填写'}
      autoSize={{ minRows: 3, maxRows: 5 }}
      showCount
      styles={{
        count: {
          color: '#5E5E5E',
          fontSize: 14,

          bottom: '-20px',
          letterSpacing: '0.6px',
        },
      }}

      allowClear={{
        clearIcon: (
          <CloseCircleOutlined
            style={{
              color: '#5E5E5E',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          />
        ),
      }}
      {...props}
    />
  );
};

EInput.ETextArea = ETextArea;
export default EInput;
