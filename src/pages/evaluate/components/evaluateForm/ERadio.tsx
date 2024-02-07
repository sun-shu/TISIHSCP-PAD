import { Input, Radio, Space } from 'antd';

const ERadio = (props) => {
  const { value, onChange } = props;
  return (
    <div>
      <Radio.Group {...props}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
            其他
            {value === 4 ? (
              <Input
                style={{ width: 100, marginLeft: 10 }}
                placeholder="Borderless"
                variant="borderless"
                // className="border-b-[1px]"
              />
            ) : null}
          </Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default ERadio;
