import { useRequest } from 'umi';
import { getAssessTrendList } from '@/api/evalute';

const useLoadTrendList = (locationParams, ready) => {
	const { data, loading } = useRequest(() => {
		return getAssessTrendList({
			...locationParams,
		});
	}, {
		ready,
	});

	return {
		data,
		loading,
	};
};

export default useLoadTrendList;