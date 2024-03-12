// .stylelintrc.js
module.exports = {
  root: true,
  // 继承某些已有的规则
  // PS： 如果执行umi lint时控制台Unknown rule，需要去node_modules/@umijs/lint/dist/config/stylelint/index.js这个位置
  // 删除stylelint-config-prettier这个包的引用，因为版本原因，具体说明在以下位置
  // https://github.com/prettier/stylelint-config-prettier?tab=readme-ov-file#stylelint-config-prettier
  extends: require.resolve('umi/stylelint'),

  rules: {
    'function-url-quotes': 'always', // URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'color-hex-length': 'long', // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
    'font-family-no-missing-generic-family-keyword': null, // 禁止在字体族名称列表中缺少通用字体族关键字
    'property-no-unknown': null, // 禁止未知的属性
    'no-empty-source': null, // 禁止空源码
    'selector-class-pattern': null, // 强制选择器类名的格式
    'value-no-vendor-prefix': null, // 关闭 vendor-prefix (为了解决多行省略 -webkit-box)
    'no-descending-specificity': null, // 不允许较低特异性的选择器出现在覆盖较高特异性的选择器
    'at-rule-no-unknown': null,
    'color-function-notation': null,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
