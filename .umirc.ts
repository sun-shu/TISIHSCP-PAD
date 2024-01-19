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
    { path: '/', component: 'task/list/index' },
    { path: '/docs', component: 'docs' },
    { path: '/login', component: 'user/login/index', layout: false },
    { path: '/user-info', component: 'user/info/index' },
    { path: '/task-list', component: 'task/list/index' },
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
});
