import ElderDetailLayout from '@/components/ElderDetailLayout/index';
import { Button } from 'antd';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { history } from 'umi';
import LookIcon from '@/assets/icon/look.png';
import { useSearchParams } from '@@/exports';
import useLoadEvaluteList from '@/pages/elder/detail/hooks/useLoadEvaluteList';
import useLoadTrendList from '@/hooks/domain/useLoadTrendList';
import dayjs from 'dayjs';

import { TemplateClassEnum } from '@/enums/TemplateClassEnum';

import EmptyDataContainer from '@/components/exception/EmptyDataContainer';

// 评估记录卡片
const EvaluationRecordCard = ({
																templateClass,
																recordMainId,
																reportTitle = '',
																reportDate = '',
																evaluator = '',
																templateCode = '',
																customerId = '',
															}) => {
	const handleGoToReport = (item = {}) => {
		const url = templateClass === TemplateClassEnum.EvaluateGroup ? `/elder/evaluation-report?recordMainId=${recordMainId}&templateComposeCode=${templateCode}&customerId=${customerId}` : `/elder/evaluation-report?recordMainId=${recordMainId}&customerId=${customerId}`;
		history.push(url);
	};

	const handleGoToDetail = () => {
		const url = templateClass === TemplateClassEnum.EvaluateGroup ? `/evaluate/add-and-view-of-composite/${customerId}/${templateCode}?recordMainId=${recordMainId}` : `/evaluate/detail/${templateCode}/${recordMainId}?customerId=${customerId}`;

		history.push(url);
	};

	return (
		<div className="w-full h-[76px] px-[20px] py-[10px] bg-white rounded justify-between items-center inline-flex"
		>
			<div className=" flex-col justify-start items-start inline-flex">
				<div className="self-stretch h-9 text-zinc-700 text-lg font-semibold line-clamp-1 leading-[30px]">
					{reportTitle}
				</div>
				<div className="justify-start items-start inline-flex">
					<div className="justify-start items-start gap-5 flex">
						<div className="text-zinc-700 text-sm font-normal  leading-tight tracking-wide">
							{reportDate}
						</div>
						<div className="justify-start items-start flex">
							<div className="text-zinc-700 text-sm font-normal  leading-tight tracking-wide">
								评估师：
							</div>
							<div className="text-zinc-700 text-sm font-normal  leading-tight tracking-wide">
								{evaluator}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" gap-5  h-auto w-fit flex">
				<Button
					onClickCapture={handleGoToDetail}
					type="primary"
					className="text-white text-sm flex w-max"

					icon={<img src={LookIcon} width={24} height={24} />}
				>
					查看内容
				</Button>
				<Button
					onClickCapture={handleGoToReport}
					type="primary"
					className="text-white text-sm flex w-max"

					icon={<img src={LookIcon} width={24} height={24} />}
				>
					查看报告
				</Button>
			</div>
		</div>
	);
};

// 评估趋势卡片
const EvaluationTrendCard = ({ item, customerId }) => {
	return (
		<div className="w-full h-[76px] flex-col justify-start items-start gap-2.5 inline-flex">
			<div className="w-full px-5 py-2.5 bg-white rounded justify-between items-center inline-flex">
				<div className="w-[300px] flex-col justify-start items-start inline-flex">
					<div className="self-stretch h-9 text-zinc-700 text-lg font-semibold  leading-9">
						{item.templateName}
					</div>
					<div className="justify-start items-start inline-flex">
						<div className="justify-start items-start gap-5 flex">
							<div className="text-zinc-700 text-sm font-normal  leading-tight tracking-wide">
								{dayjs(item.updateTime).format('YYYY-MM-DD')}
							</div>
						</div>
					</div>
				</div>
				<Button
					type="primary"
					className="text-white text-sm flex"
					onClick={() => {
						history.push('/elder/evaluation-trend?customerId=' + customerId + '&templateCode=' + item.templateCode);
					}}
					icon={<img src={LookIcon} width={24} height={24} />}

				>
					查看趋势
				</Button>
			</div>
		</div>
	);
};

// 评估记录列表
const EvaluationRecordList = ({ data = {}, customerId = '' }) => {

	return (
		<div className="my-[20px]">
			<div className="text-xl font-semibold  leading-[30px]">评估记录</div>
			<div>共{data?.totalNum}条记录</div>
			{data?.list?.map((item) => (
				<div className="py-[10px]">
					<EvaluationRecordCard
						templateClass={item.templateClass}
						reportTitle={item.templateName}
						reportDate={dayjs(item.recordTime).format('YYYY-MM-DD')}
						evaluator={item.createUser}
						recordMainId={item.recordMainId}
						templateCode={item.templateCode}
						customerId={customerId}
					/>
				</div>
			))}
		</div>
	);
};

// 评估趋势列表
const EvaluationTrendList = ({ data = {}, customerId = '' }) => {
	return (
		<div className="my-[20px]">
			<div className="text-xl font-semibold  leading-[30px]">评估趋势</div>
			<div>共{data?.length}条记录</div>
			{data?.map((item) => (
				<div className="py-[10px]">
					<EvaluationTrendCard
						item={item}
						customerId={customerId}
					/>
				</div>
			))}
		</div>
	);
};

// 点击切换记录的展示状态按钮
const MenuGroup = ({ currentTab, setCurrentTab }) => {
	return (
		<div className="border-b border-solid border-b-[color:var(--BG-,#DBDBDB)] pb-5 flex gap-[10px] w-full">
			<Button
				className={classNames(
					currentTab === TabTypeEnums.RECORD
						? 'text-primary hover:text-primary border-primary'
						: '',
					'px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
				)}
				onClick={() => {
					setCurrentTab(TabTypeEnums.RECORD);
				}}
			>
				评估记录
			</Button>
			<Button
				className={classNames(
					currentTab === TabTypeEnums.TREND
						? 'text-primary hover:text-primary border-primary'
						: '',
					'px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
				)}
				onClick={() => {
					setCurrentTab(TabTypeEnums.TREND);
				}}
			>
				评估趋势
			</Button>
		</div>
	);
};

// 选项卡Tab枚举
enum TabTypeEnums {
	ALL = 'ALL',
	RECORD = 'RECORD',
	TREND = 'TREND',
}

// 长者详情
const ElderDetail = () => {
	const containerRef = useRef(null);
	const trendContainerRef = useRef(null);
	const [currentTab, setCurrentTab] = useState(TabTypeEnums.RECORD);
	const [searchParams] = useSearchParams();
	const customerId = searchParams.get('customerId');

	const { data = {}, loading } = useLoadEvaluteList({
		customerId,
	}, containerRef);


	const { data: trendListData = {}, loading: trendLoading } = useLoadTrendList({
		customerId,
	}, () => currentTab === TabTypeEnums.TREND);
	console.log(trendListData, 'trendListData');


	return (
		<>
			<ElderDetailLayout title="长者详情" customerId={customerId}>
				<div className="w-full">
					<MenuGroup currentTab={currentTab} setCurrentTab={setCurrentTab} />

					<div>

						<div hidden={currentTab !== TabTypeEnums.RECORD} ref={containerRef}
								 className="w-full h-[800px] overflow-y-scroll">
							<EmptyDataContainer data={data.list} emptyClassName="h-full mt-[30%]" loading={loading}>
								<EvaluationRecordList data={data} customerId={customerId} />
							</EmptyDataContainer>
						</div>

						<div hidden={currentTab !== TabTypeEnums.TREND} ref={trendContainerRef}>
							<EmptyDataContainer data={trendListData} emptyClassName="h-full mt-[30%]" loading={trendLoading}>
								<EvaluationTrendList data={trendListData} customerId={customerId} />
							</EmptyDataContainer>

						</div>
					</div>
				</div>
			</ElderDetailLayout>
		</>
	);
};

export default ElderDetail;
