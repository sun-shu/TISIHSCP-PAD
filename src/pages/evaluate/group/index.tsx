import { history } from '@@/core/history';
import { ProfileFilled, SearchOutlined } from '@ant-design/icons';
import { Affix, Button, ConfigProvider, Input } from 'antd';

const SearchComponent = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeShadow: 'none',
              activeBorderColor: 'none',
              paddingInline: 0,
            },
            Select: {
              borderRadius: 4,
            },
          },
        }}
      >
        <div className=" min-w-[620px]">
          <Input
            prefix={
              <SearchOutlined className="site-form-item-icon mr-[10px]" />
            }
            placeholder="搜索"
            allowClear
            suffix={
              <Button type="primary" className="rounded-3xl">
                搜索
              </Button>
            }
            size="large"
            className="rounded-[100px] pd-[4px] mb-[10px]"
          />
        </div>
      </ConfigProvider>
    </>
  );
};

const EvaluateTemplateCard = () => {
  const handleGoToDetailClick = () => {
    history.push('/elder/detail');
  };

  return (
    <div
      className="relative rounded bg-white w-full flex flex-row items-center justify-between py-[0.63rem] pr-[1.25rem] mb-[20px] pl-[0.63rem] box-border cursor-pointer text-left text-[1.25rem] text-darkslategray font-px"
      onClick={handleGoToDetailClick}
    >
      <div className="w-[22.38rem] flex flex-row items-center justify-start gap-[0.63rem]">
        <div className="flex-col justify-start items-start inline-flex">
          <div className="w-[220px] text-zinc-700 text-lg font-semibold font-['PingFang SC'] leading-9">
            养老照护分级评估
          </div>
          <div className="text-zinc-700 text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide">
            评估
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-[1.25rem] text-[0.88rem] text-fg-main-bluegreen">
        <Button
          className="px-[10px] py-[4px]"
          type="primary"
          icon={<ProfileFilled className="site-form-item-icon  font-bold " />}
        >
          使用模版
        </Button>
      </div>
    </div>
  );
};
const ListComponent = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeShadow: 'none',
              activeBorderColor: 'none',
              paddingInline: 0,
            },
            Select: {
              borderRadius: 4,
            },
          },
        }}
      >
        {Array.from(new Array(100)).map(() => (
          <EvaluateTemplateCard />
        ))}
      </ConfigProvider>
    </>
  );
};

const ElderTemplateListPage = () => {
  return (
    <>
      <div className=" text-center flex justify-center flex-col items-center">
        <div>
          <Affix offsetTop={50}>
            <div className="bg-gray-F6 pt-[10px]">
              <div className="flex flex-col items-start justify-start text-[1.75rem] mb-[10px]">
                <div className="relative leading-[2.63rem] font-semibold">
                  评估模版
                </div>
                <div className="relative text-[0.75rem] tracking-[0.05em] leading-[1.13rem]">
                  共有 30个模版
                </div>
              </div>

              <div className=" border-b-[1px] border-solid border-bg- pb-[20px] mb-[20px]">
                <SearchComponent />
              </div>
            </div>
          </Affix>
          <ListComponent></ListComponent>
        </div>
      </div>
    </>
  );
};

export default ElderTemplateListPage;
