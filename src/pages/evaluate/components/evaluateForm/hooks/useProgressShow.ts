// 思路：过滤不展示的，form值变化时调用验证 初始化时调用一次表单验证
// 全部

import { useState } from 'react';

const useProgressShow = () => {


  const [fillCount, setFillCount] = useState(5);
  const [needFillCount, setNeedFillCount] = useState(10);


  return {
    fillCount,
    needFillCount,
  };
};

export default useProgressShow;