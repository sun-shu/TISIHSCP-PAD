import { CloseCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { forwardRef } from 'react';

const { TextArea } = Input;

const EInput = (props) => {
  const { id, value, onChange, item: config = {}, componentProps } = props;

  const handleChange = (e) => {
    onChange({
      ...config,
      answer: e.target.value,
      elementId: config.id,
      optionType: config.elementType,
    });
  };

  return (
    <div id={id}>
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
    </div>

  );
};

const ETextArea = (props) => {
  const { id, value, onChange, item: config = {} } = props;

  const handleChange = (e) => {
    onChange({
      ...config,
      answer: e.target.value,
      elementId: config.id,
      optionType: config.elementType,
    });
  };

  return (
    <div id={id}>
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
    </div>

  );
};

EInput.ETextArea = ETextArea;
export default EInput;
