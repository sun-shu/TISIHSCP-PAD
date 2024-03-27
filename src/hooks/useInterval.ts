import { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';

function useInterval(fn: Function, time: number) {
  const ref = useRef(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  let cleanUpFnRef = useRef<Function>();

  const clean = useCallback(() => {
    cleanUpFnRef.current?.();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => ref.current(), time);

    cleanUpFnRef.current = () => {
      clearInterval(timer);
    };

    return clean;
  }, []);

  return clean;
}


/**
 * 里我们封装了个 useInterval 的函数，传入 fn 和 time，里面会用 useRef 保存并更新每次的函数。
 *
 * 通过 useEffect 来跑定时器，依赖数组为 []，确保定时器只跑一次。
 *
 * 在 useEffect 里返回 clean 函数在组件销毁的时候自动调用来清理定时器。
 *
 * useInterval 返回 clean 函数是让调用者可以手动清理定时器。
 *
 * 那为什么要用 useCallback 包裹 clean 函数呢？
 *
 * 因为返回的 clean 函数可能是作为参数传入其它组件，这个组件可能是用 memo 包裹的，所以我们内部做了这个，调用者就不用再包一层 useCallback。
 *
 * 这种就叫做自定义 hook，它就是普通的函数封装，没啥区别。
 *
 * 这样，组件里就可以直接用 useInterval 这个自定义 hook，不用每次都 useRef + useEffect 了。
 *
 * **/