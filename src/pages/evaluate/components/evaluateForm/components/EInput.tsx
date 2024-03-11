import { CloseCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { forwardRef } from 'react';

const { TextArea } = Input;

const EInput = (props) => {
  const { value, onChange, item: config = {}, componentProps } = props;

  const handleChange = (e) => {
    onChange({
      answer: e.target.value,
      elementId: config.id,
      optionType: config.elementType,
      optionValues: [],
    });
  };

  return (
    <Input
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
      maxLength={config?.elementMaxLength}
      placeholder={config.elementPlaceholder}
      onChange={handleChange}
      value={value?.answer}
      {...componentProps}
    />
  );
};

const ETextArea = (props) => {
  const { value, onChange, item: config = {} } = props;

  const handleChange = (e) => {
    onChange({
      answer: e.target.value,
      elementId: config.id,
      optionType: config.elementType,
      optionValues: [],
    });
  };

  return (
    <TextArea
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
      maxLength={config?.elementMaxLength}
      placeholder={config.elementPlaceholder}
      onChange={handleChange}
      value={value?.answer}
    />
  );
};

EInput.ETextArea = ETextArea;
export default EInput;
