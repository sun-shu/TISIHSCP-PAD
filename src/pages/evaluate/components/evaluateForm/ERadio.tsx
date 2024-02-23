import { Input, Radio, Space } from 'antd';

const ERadio = (props) => {
  const { value, onChange } = props;
  return (
    <div>
      <Radio.Group {...props} className="w-full">
        <Space direction="vertical" className="w-full">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4} className="w-full flex flex-1 relative">
            <span>
              其他
              {value === 4 ? (
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
          </Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default ERadio;
