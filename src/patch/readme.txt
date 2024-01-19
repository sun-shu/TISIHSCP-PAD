
preflight.css：
该文件夹用来存储补丁。
tailwindCSS和antd样式有冲突，
（node_modules/tailwindcss/src/css/preflight.css）
tailwindCSS会使用上面的CSS地址为元素重置默认样式，其中包括Button，样式的优先级高于antd,会导致antd的按钮样式失效。
参考文章：https://juejin.cn/post/7311343199292276763?searchId=202401101725583E96AFC63C83D0242B7C

这个问题还有另外两个方案：使用@ant-design/cssinjs的StyleProvider，和该issue下的插件方案。
https://github.com/ant-design/ant-design/issues/38794
----------------------------------------------------------

