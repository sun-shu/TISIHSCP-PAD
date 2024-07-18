import { Checkbox, Space } from 'antd';

const weekOptions = [

	{ label: '周一', value: '2' },
	{ label: '周二', value: '3' },
	{ label: '周三', value: '4' },
	{ label: '周四', value: '5' },
	{ label: '周五', value: '6' },
	{ label: '周六', value: '7' },
	{ label: '周日', value: '1' },
];
const dayOptions = Array.from({ length: 31 }, (v, i) => {
	return { label: `${(i + 1).toString()}日`, value: (i + 1).toString().padStart(2, '0') };
});

const DAY_IN_MONTH_LIMIT = 10;

/**
 * 频率选择
 * @param props
 * disabled 因为子项要单独计算是否禁用，所以这里需要传递一个总的禁用状态控制
 * @constructor
 * @return {JSX.Element}
 */
const EFrequencyCheckBox = (props) => {
	const { id, value = {}, onChange, item: config, type = 'week', disabled } = props;

	const handleOnChange = (newValue) => {
		const data = {
			...config,
			...value,
			answer: newValue.join(','),
			elementId: config.id,
		};

		onChange(data);
	};

	const options = type === 'week' ? weekOptions : dayOptions;

	const checkboxItemDisabled = (item) => {
		if (type === 'month') {
			const dataArr = value?.answer?.split(',');
			return dataArr.length >= DAY_IN_MONTH_LIMIT && !dataArr.includes(item?.value.toString());
		}
		return false;
	};

	return (<div id={id}>
		<Checkbox.Group
			className="w-full"
			value={value?.answer?.split(',')} onChange={handleOnChange} disabled={disabled}>
			<Space direction="horizontal" className="w-full" wrap>
				{
					options?.map((item) => {
						return (<Checkbox value={item?.value.toString()} className="min-w-[80px]"
															disabled={checkboxItemDisabled(item)}>{item?.label}</Checkbox>);
					})
				}
			</Space>
		</Checkbox.Group>

	</div>);
};

export default EFrequencyCheckBox;