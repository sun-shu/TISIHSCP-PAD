import { useState, useEffect } from 'react';
import { useDebounceFn } from 'ahooks';

const useLoadMoreScroll = (fetchData: () => Promise<any>, pageinfo = {
  currentPage: 1,
  pageSize: 10,
  total: 0,
}, delay = 500) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const debounceFn = useDebounceFn(fetchData, { wait: delay });

  useEffect(() => {
    debounceFn.run({
      pageSize: pageinfo.pageSize,
      pageNumber: pageinfo.currentPage + 1,
    }).then((res) => {
      setData([...data, ...res.data]);
    });

    const handleScroll = () => {
      if (!loading && hasMore && window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        setLoading(true);
        debounceFn.run({
          pageSize: pageinfo.pageSize,
          pageNumber: pageinfo.currentPage + 1,
        }).then((res) => {
          setData([...data, ...res.data]);
          setHasMore(data.length === res.total);
          setLoading(false);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      debounceFn.cancel();
    };
  }, [debounceFn, loading, hasMore, data]);

  return { data, loading, hasMore };
};

export default useLoadMoreScroll;
