import { useRequest } from '@@/exports';
import { getAssessTrendDateList, getAssessTrendChart } from '@/api/evalute';

const useLoadTrendTimeLine = (customerId, currentTemplateCode) => {
	const { data, loading } = useRequest(() => {
		return getAssessTrendDateList({
			customerId,
			templateCode: currentTemplateCode,
		});
	}, {
		refreshDeps: [currentTemplateCode],
	});

	return {
		data,
		loading,
	};
};

const useLoadTrendChartData = (customerId, currentTemplateCode, year) => {
	const { data, loading, run } = useRequest(() => {
		return getAssessTrendChart({
			customerId,
			templateCode: currentTemplateCode,
			year,
		});
	}, {
		refreshDeps: [currentTemplateCode, year],
	});

	return {
		data,
		loading,
	};
};

export {
	useLoadTrendTimeLine,
	useLoadTrendChartData,
};