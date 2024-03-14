import { ProfileFilled, SearchOutlined } from '@ant-design/icons';
import { Affix, Button, ConfigProvider, Input } from 'antd';
import { history } from 'umi';
import useLoadEvaluteTemplateList from '@/pages/evaluateTemplate/list/hooks/useLoadEvaluteTemplateList';
import { useSearchParams } from '@@/exports';
import { TemplateClassEnum } from '@/enums/TemplateClassEnum';
import { EvluateRelativeTypeEnum } from '@/enums/EvluateRelativeTypeEnum';

const templateTypeDescConfig = {
  [TemplateClassEnum.Evaluate]: '评估',
  [TemplateClassEnum.EvaluateGroup]: '综合评估',
  [TemplateClassEnum.Form]: '表单',
};

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

const EvaluateTemplateCard = ({ data = {}, customerId }) => {
  const handleGoToDetailClick = (item) => {
    const nextUrl = {
      [TemplateClassEnum.Evaluate]: `/evaluate/add/${customerId}/${item?.templateCode}`, // 评
      [TemplateClassEnum.Form]: `/evaluate/add/${customerId}/${item?.templateCode}`, // 评
      [TemplateClassEnum.EvaluateGroup]: `/evaluate/add-of-composite/${customerId}/${item?.templateCode}?relativeType=${EvluateRelativeTypeEnum.CUSTOMER}&relativeId=${customerId}`,// 估
    };
    history.push(nextUrl[item?.templateClass]);
  };

  return (
    <div
      className="relative rounded bg-white w-full flex flex-row items-center justify-between py-[0.63rem] pr-[1.25rem] mb-[20px] pl-[0.63rem] box-border cursor-pointer text-left text-[1.25rem] text-darkslategray font-px">
      <div className="w-[22.38rem] flex flex-row items-center justify-start gap-[0.63rem]">
        <div className="flex-col justify-start items-start inline-flex">
          <div className="w-[220px] text-zinc-700 text-lg font-semibold font-['PingFang SC'] leading-9">
            {data?.name}
          </div>
          <div className="text-zinc-700 text-sm font-normal font-['PingFang SC'] leading-tight tracking-wide">
            {templateTypeDescConfig[data?.templateClass]}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-[1.25rem] text-[0.88rem] text-fg-main-bluegreen">
        <Button
          className="px-[10px] py-[4px]"
          type="primary"
          onClickCapture={() => {
            handleGoToDetailClick(data);
          }}
        >
          开始评估
        </Button>
      </div>
    </div>
  );
};

const ListComponent = ({ data = [], customerId }) => {
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
        {data?.map((item) => (
          <EvaluateTemplateCard data={item} customerId={customerId} />
        ))}
      </ConfigProvider>
    </>
  );
};


const ElderTemplateListPage = () => {
  const [searchParams] = useSearchParams();
  const customerId = searchParams.get('customerId');

  const { data = {} } = useLoadEvaluteTemplateList({
    customerId,
  });

  console.log('ElderTemplateListPage', data?.dataList);
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
                  共有 {data?.dataList?.length}个模版
                </div>
              </div>

              <div className=" border-b-[1px] border-solid border-bg- pb-[20px] mb-[20px]">
                <SearchComponent />
              </div>
            </div>
          </Affix>
          <ListComponent data={data?.dataList} customerId={customerId}></ListComponent>
        </div>
      </div>
    </>
  );
};

export default ElderTemplateListPage;
