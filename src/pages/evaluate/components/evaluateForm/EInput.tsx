import { CloseCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const { TextArea } = Input;

const EInput = () => {
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
    />
  );
};

const ETextArea = () => {
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
      maxLength={100}
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
    />
  );
};

EInput.ETextArea = ETextArea;
export default EInput;
