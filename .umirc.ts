import pxtorem from 'postcss-pxtorem';
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/request',

    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',

    '@umijs/plugins/dist/tailwindcss',
    '@umijs/plugins/dist/react-query',
  ],
  antd: {
    configProvider: {},
    theme: {
      colorPrimary: '#00ADB8',
      token: {
        colorPrimary: '#00ADB8',
      },
      components: {
        Button: {
          colorPrimary: '#00ADB8',
          borderRadius: 4,
        },
      },
    },
    style: 'less',
    appConfig: {},
  },
  initialState: {},
  model: {},
  request: {
    dataField: 'data',
  },
  routes: [
    { path: '/', component: 'evaluate/taskList/index' },
    { path: '/docs', component: 'docs' },
    { path: '/login', component: 'user/login/index', layout: false },
    { path: '/user-info', component: 'user/info/index' },
    {
      path: '/elder',
      routes: [
        {
          path: '/elder',
          redirect: '/elder/list',
        },
        { path: '/elder/list', component: 'elder/list/index' },
        { path: '/elder/detail', component: 'elder/detail/index' },
        {
          path: '/elder/evaluation-report',
          component: 'elder/evaluationReport/index',
        },
        {
          path: '/elder/evaluation-trend',
          component: 'elder/evaluationTrend/index',
        },
      ],
    },
    {
      path: '/evaluate',
      routes: [
        {
          path: '/evaluate',
          redirect: '/evaluate/task-list',
        },
        {
          path: '/evaluate/add',
          component: 'evaluate/add/index',
        },
        {
          path: '/evaluate/template-list',
          component: 'evaluateTemplate/list/index',
        },
        {
          path: '/evaluate/template-list-composite',
          component: 'evaluateTemplate/listOfComposite/index',
        },
        { path: '/evaluate/task-list', component: 'evaluate/taskList/index' },
      ],
    },
  ],
  alias: {
    '@': 'src/',
  },
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
    '/hcsp-gateway': {
      target: 'http://test-shcsp.tisi.com.cn/hcsp-gateway/',
      changeOrigin: true,
      pathRewrite: { '^/hcsp-gateway': '' },
    },
  },
  tailwindcss: {},

  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 16, // 根据设计稿设置
      propList: ['*'],
      unitPrecision: 10,
    }),
  ],
});
