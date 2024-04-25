import ElderDetailLayout from '@/components/ElderDetailLayout';
import { Button, Select } from 'antd';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import ReactEcharts from 'echarts-for-react';
import dayjs from 'dayjs';
import { useLoadTrendChartData, useLoadTrendTimeLine } from '@/pages/elder/evaluationTrend/hooks/useLoadTrendTimeLine';
import { useSearchParams } from '@@/exports';
import useLoadTrendList from '@/hooks/domain/useLoadTrendList';

enum TabTypeEnums {
	ALL = 'ALL',
	RECORD = 'RECORD',
	TREND = 'TREND',
}

// 点击切换记录的展示状态按钮
const MenuGroup = ({ data = {}, currentTab, setCurrentTab }) => {
	return (
		<div className="border-b border-solid border-b-[color:var(--BG-,#DBDBDB)] pb-5 flex gap-[10px]">
			<Button
				onClick={() => {
					setCurrentTab('');
				}}
				className={classNames(
					currentTab === ''
						? 'text-primary hover:text-primary border-primary'
						: '',
					'px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
				)}
			>
				全部
			</Button>
			{
				// data?.year.length > 1 &&
				data?.year?.length > 1 && data.year?.map((item) => {
					return <Button
						className={classNames(
							currentTab === item
								? 'text-primary hover:text-primary border-primary'
								: '',
							'px-[20px] py-[10px] text-sm leading-5 tracking-wider justify-center items-stretch border bg-white rounded-3xl border-solid h-auto',
						)}
						onClick={() => {
							setCurrentTab(item);
						}}
					>
						{item}
					</Button>;
				})
			}


		</div>
	);
};

// const data = [{
// 	date: '2023-01-05',
// 	type: '本年度',
// 	month: '1 月',
// 	value: 42,
// },
// 	{
// 		date: '2023-02-03',
// 		type: '本年度',
// 		month: '2 月',
// 		value: 67,
// 	},
// 	{
// 		date: '2023-03-12',
// 		type: '本年度',
// 		month: '3 月',
// 		value: 38,
// 	},
// 	{
// 		date: '2023-04-20',
// 		type: '本年度',
// 		month: '4 月',
// 		value: 55,
// 	},
// 	{
// 		date: '2023-05-05',
// 		type: '本年度',
// 		month: '5 月',
// 		value: 76,
// 	},
// 	{
// 		date: '2023-06-10',
// 		type: '本年度',
// 		month: '6 月',
// 		value: 23,
// 	},
//
// 	{
// 		date: '2023-09-05',
// 		type: '本年度',
// 		month: '9 月',
// 		value: 33,
// 	},
// 	{
// 		date: '2023-10-10',
// 		type: '本年度',
// 		month: '10 月',
// 		value: 66,
// 	},
// 	{
// 		date: '2023-11-15',
// 		type: '本年度',
// 		month: '11 月',
// 		value: 55,
// 	},
// 	{
// 		date: '2023-12-20',
// 		type: '本年度',
// 		month: '12 月',
// 		value: 99,
// 	},
// 	{
// 		date: '2022-05-06',
// 		type: '上一年',
// 		month: '5 月',
// 		value: 56,
// 	},
// 	{
// 		date: '2022-06-07',
// 		type: '上一年',
// 		month: '6 月',
// 		value: 85,
// 	},
// 	{
// 		date: '2022-07-09',
// 		type: '上一年',
// 		month: '7 月',
// 		value: 45,
// 	}];

const monthSpan = 3;

const colorByYear = {
	thisYear: '#00ADB8',
	lastYear: '#FAD4A6',
};

const TestTrend = ({ data, activeYear }) => {
	const chartRef = useRef();
	const [option, setOption] = useState({});
	const [dayList, setDayList] = useState([]);
	const [activeDate, setActiveDate] = useState('');

	const isThisYear = (year) => {
		return year.toString() === activeYear.toString();
	};
	// 根据date是否是当前年度返回颜色值
	const getColorByYear = (year) => {
		return isThisYear(year) ? colorByYear.thisYear : colorByYear.lastYear;
	};
	const initOptionFn = (dataByYear, dayList, dataFormat) => {
		// 根据dataByYear 生成series 暂时默认展示所有数据
		let series = [];
		if (!activeYear) {
			series.push({
				type: 'line',
				data: dataFormat,
				itemStyle: {
					color: colorByYear.thisYear,
				},
				symbol: 'circle',
				symbolSize: 6,
				markPoint: {
					symbol: 'circle',
					symbolSize: 10,
					itemStyle: {
						color: '#F9AD9B', // 自定义标记点颜色
					},
					label: {
						offset: [20, 0],
						color: colorByYear.thisYear,
						fontSize: 14,
					},
				},
			});
		} else {
			for (const key in dataByYear) {
				series.push({
					type: 'line',
					data: dataByYear[key],
					name: key,
					itemStyle: {
						color: getColorByYear(key),
					},
					symbol: 'circle',
					symbolSize: 6,
				});
			}
		}

		console.log('series', series, dataByYear);

		const legend = {
			data: Object.keys(dataByYear),
			formatter: function(value) {
				const yearArr = Object.keys(dataByYear);
				if (yearArr.length === 1) {
					return '本年度';
				}
				return value === yearArr[0] ? '上一年' : '本年度';
			},
			orient: 'vertical', // 设置图例垂直排布
			right: 0,
			selectedMode: false,
			itemHeight: 0,
			lineStyle: {
				width: 5,
			},
		};

		//改为
		legend.show = !!activeYear;

		const tooltip = {
			trigger: 'axis',
			formatter: function(params) {
				const data = params[0];
				return '时间：' + dayjs(data.value[0]).format('YYYY-MM-DD') + '<br/>' + '分数：' + data.value[1] + '';
			},
			axisPointer: {
				lineStyle: {
					color: '#F9AD9B', // 自定义分割线颜色
					type: 'solid',
				},
			},
			// position: [10, 10],
		};
		return {
			tooltip: activeYear ? {
				show: false,
			} : tooltip,
			xAxis: {
				axisTick: {
					show: false,
				},

				type: 'time',
				axisLine: {
					show: false,
				},
				axisLabel: {
					// 可自定义x轴展示字段
					formatter: function(value) {
						if (data.length === 1 && dayjs(value).day() !== dayjs(data[0].recordTime).day()) {
							return '';
						}
						if (!activeYear) {
							// 选择全部时，可能出现重复月，为区分，则加上了年的展示
							return `${dayjs(value).format('YYYY/MM')}`;
						}
						return `${dayjs(value).format('M')}月`;
					},
					showMinLabel: true,
				},
				minInterval: 3600 * 24 * 1000 * 30,
				maxInterval: data.length === 1 ? 3600 * 24 * 1000 : 3600 * 24 * 1000 * 30,
				// min: 'dataMin',
				// max: 'dataMax',
			},
			yAxis: {
				type: 'value',
			},
			legend,
			series,
			dataZoom: [
				{
					type: 'slider',
					show: true,
					filterMode: 'none',
				},
				{
					type: 'inside',
					zoomLock: true,
					filterMode: 'none',
				},
			],
		};
	};
	useEffect(() => {
		const chartInstance = chartRef?.current?.getEchartsInstance();
		// 清空图表，避免选择全部时数据异常
		chartInstance.clear();

		if (data) {
			setActiveDate('');


			const { dataByYear, dayList = [], dataFormat } = remakeData();

			chartInstance.setOption(initOptionFn(dataByYear, dayList, dataFormat));
			// setOption(initOptionFn(dataByYear, dayList));

			const monthOfFirstDay = parseInt(dayjs(dayList?.[0]?.date).format('MM'));

			const getStartAndEndMonthIndex = (month) => {
				const index = dayList.findIndex((item) => {
					return parseInt(dayjs(item.date).format('MM')) === month;
				});
				change(dayList[index], index, dayList);
			};

			getStartAndEndMonthIndex(monthOfFirstDay); // 传入当前想展示的月份
		}

	}, [data]);

	// 将日期转化为本年度
	const formatDate = (date) => {
		return `${dayjs().format('YYYY')}-${dayjs(date).format('MM-DD')}`;
	};

	const getYear = (date) => {
		return dayjs(date).format('YYYY');
	};

	const remakeData = () => {
		// 按照日期排序
		const dataSort = data.sort((a, b) => {
			return a.recordTime - b.recordTime;
		});

		const yearMap = new Map();
		const dateMap = new Map();
		dataSort.forEach((item) => {
			const { recordTime: date, recordScore: value } = item;

			// const value = Math.random();
			const dateStr = formatDate(date);

			const year = getYear(date);

			// 根据年度分别压入更新日期后数据
			if (yearMap.has(year)) {
				yearMap.set(year, yearMap.get(year).concat([[dateStr, value]]));
				dateMap.set(year, dateMap.get(year).concat([{ date: dateStr, year }]));
			} else {
				yearMap.set(year, [[dateStr, value]]);
				dateMap.set(year, [{ date: dateStr, year }]);
			}
		});
		const dataByYear = Object.fromEntries(yearMap);
		const dateByYear = Object.fromEntries(dateMap);

		let dayList = [];
		let dataFormat = [];
		// 根据选中年份，获取对应的dayList
		if (!activeYear) {
			dataFormat = dataSort
				.map((item) => [item.recordTime, item.recordScore])
				.sort((a, b) => dayjs(a[0]).valueOf() - dayjs(b[0]).valueOf());

			console.log('dataFormat', dataFormat);
			dayList = dataFormat.map((item) => {
				return { date: item[0] };
			});
		} else {
			dayList = dateByYear[activeYear];
		}

		dayList = dayList?.sort((a, b) => {
			return dayjs(a.date).valueOf() - dayjs(b.date).valueOf();
		});

		setDayList(dayList);

		return {
			dataByYear,
			dayList,
			dataFormat,
		};
	};

	const getDataInDate = (date) => {
		return data.filter((item) => dayjs(item.recordTime).format('MM-DD') === dayjs(date).format('MM-DD'));
	};

	const addMarkLine = (xAxisIndex, dayList) => {
		const chartInstance = chartRef?.current?.getEchartsInstance();

		const date = dayList[xAxisIndex]?.date;
		const dataList = getDataInDate(date);
		const markPointData = dataList.map((item) => {
			return {
				xAxis: formatDate(item.recordTime),
				yAxis: item.recordScore,
				value: item.recordScore,
			};
		});

		if (activeYear) {
			let markLine = {
				symbol: 'none', // 去掉箭头
				data: [
					{
						xAxis: date, // 选中的 x 轴坐标索引
					},
				],
				label: {
					show: false, // 分割线是否展示对应日期
					position: 'start', // 标签位置  start/end
					formatter: function(params) {
						return `${dayjs(params.data.coord[0]).format('MM-DD')}`;
					},
				},
				lineStyle: {
					color: '#F9AD9B', // 自定义分割线颜色
					type: 'solid',
				},
			};
			let markPoint = {
				data: markPointData,
				symbol: 'circle',
				symbolSize: 10,
				itemStyle: {
					color: '#F9AD9B', // 自定义标记点颜色
				},
				label: {
					offset: [20, 0],
					color: colorByYear.thisYear,
					fontSize: 14,
				},
			};

			chartInstance.setOption({
				series: [
					{
						markLine,
						markPoint,
					},
				],
			});
		}
	};

	const change = (item = {}, index, dayList) => {
		const { date } = item;
		setActiveDate(item);
		const { startValue, endValue } = getStartEndValues(date);
		const chartInstance = chartRef?.current?.getEchartsInstance(); // 更新echarts图表的dataZoom
		chartInstance.setOption({
			dataZoom: [
				{
					type: 'slider',
					show: false,
					filterMode: 'none',
					startValue,
					endValue,
				},
			],
			xAxis: {
				axisLabel: {
					color: function(value) {
						return isMonthActive(value, dayList[index]?.date) && colorByYear.thisYear;
					},
				},
			},
		});
		addMarkLine(index, dayList);
	};

	const isMonthActive = (value, date) => {
		return dayjs(value).format('YYYY-MM') === dayjs(date).format('YYYY-MM');
	};
	const handleToggleDateBtnClick = (item, index) => {
		setActiveDate(item);
		change(item, index, dayList);
	};

	const getStartEndValues = (selectedDate) => {
		let startValue = dayjs(selectedDate).subtract(monthSpan, 'month').startOf('month');
		let endValue = dayjs(selectedDate).add(monthSpan, 'month').endOf('month');

		// 如果endValue超过了12月，将其设置为12月的最后一天
		if (endValue.month() > 11) {
			endValue = endValue.set('date', 31);
		} else {
			endValue = endValue.add(1, 'month').set('date', 0);
		}

		// 如果startValue小于1月，将其设置为1月的第一天
		if (startValue.month() < 0) {
			startValue = startValue.add(12, 'month').set('date', 1);
		}

		return { startValue: startValue.format('YYYY-MM-DD'), endValue: endValue.format('YYYY-MM-DD') };
	};
	return (
		<div className="scroll max-w-[630px]">
			<ReactEcharts option={option} style={{ height: '400px' }} ref={chartRef} />

			<div className="overflow-x-auto flex gap-2 customer-scroll-bar py-[4px]">
				{activeYear &&
					dayList?.map((item, index) => (
						<Button
							shape="round"
							key={index}
							onClick={() => {
								handleToggleDateBtnClick(item, index);
							}}
							type="primary"
							ghost={item.date !== activeDate.date}
						>
							{item.year}-{dayjs(item.date).format('MM-DD')}
						</Button>
					))}
			</div>
		</div>
	);
};

const EvaluationTrendPage = () => {

	const [searchParams] = useSearchParams();
	const customerId = searchParams.get('customerId');
	const templateCode = searchParams.get('templateCode');

	const [currentTemplateCode, setCurrentTemplateCode] = useState(templateCode);
	const [activeYear, setActiveYear] = useState('');
	const { data: timeGroupData, loading } = useLoadTrendTimeLine(customerId, currentTemplateCode);
	const { data: chartData, loading: chartLoading } = useLoadTrendChartData(customerId, currentTemplateCode, activeYear);

	useEffect(() => {
		if (timeGroupData?.year?.length > 1) {

			setActiveYear(timeGroupData?.year[timeGroupData?.year?.length - 1]);
		} else {
			setActiveYear('');

		}
	}, [timeGroupData]);

	const {
		data: trendListData = [],
		loading: trendLoading,
	} = useLoadTrendList({ customerId, currentTemplateCode }, true);

	return (
		<>
			<ElderDetailLayout title="评估趋势" customerId={customerId}>
				<div>共评估{chartData?.length}次</div>
				<div className="w-full">
					<div className="w-full text-right">
						<Select className="max-w-[200px]" value={currentTemplateCode} onChange={(value) => {
							setCurrentTemplateCode(value);
						}} options={trendListData.map(item => {
							return {
								label: item.templateName,
								value: item.templateCode,
							};
						})}></Select>
					</div>

					<MenuGroup currentTab={activeYear} setCurrentTab={setActiveYear} data={timeGroupData} />

					<div className="w-full pt-[10px]">
						{chartData && <TestTrend data={chartData} activeYear={activeYear}></TestTrend>}
					</div>

				</div>
			</ElderDetailLayout>
		</>
	);
};

export default EvaluationTrendPage;
