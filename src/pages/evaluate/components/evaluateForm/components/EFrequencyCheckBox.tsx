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

const EFrequencyCheckBox = (props) => {
	const { id, value = {}, onChange, item: config, type = 'week' } = props;

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
			return value?.answer?.split(',').length >= DAY_IN_MONTH_LIMIT && !value?.answer?.split(',').includes(item?.value.toString());
		}
		return false;
	};
	return (<>
		<Checkbox.Group
			className="w-full"
			value={value?.answer?.split(',')} onChange={handleOnChange}>
			<Space direction="horizontal" className="w-full" wrap>
				{
					options?.map((item) => {
						return (<Checkbox value={item?.value.toString()} className="min-w-[80px]"
															disabled={checkboxItemDisabled(item)}>{item?.label}</Checkbox>);
					})
				}
			</Space>
		</Checkbox.Group>

	</>);
};

export default EFrequencyCheckBox;