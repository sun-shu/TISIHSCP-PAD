// .eslintrc.js
module.exports = {
  // Umi 项目
  extends: require.resolve('umi/eslint'),
  rules: {
    'rules-of-hooks': 0, // 检查 Hook 的规则
    'exhaustive-deps': 0, // 检查 effect 的依赖
  },
};
