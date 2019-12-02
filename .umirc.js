
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  hash: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
        },
        dynamicImport: { webpackChunkName: true },
        title: 'umi-mpa',
      },
    ],
    [
      'umi-plugin-mpa',
      {
        entry: {
          login: [
            './src/pages/login',
            {
              context: { title: '登录' },
            },
          ],
          dashboard: [
            './src/pages/layout',
            {
              context: { title: '管理后台' },
            },
          ],
          'ctg-record': [
            './src/pages/ctg-record',
            {
              context: { title: '胎监记录' },
            },
          ],
          'control-center': [
            './src/pages/control-center',
            {
              context: { title: '调度中心' },
            },
          ],
          'task-list': [
            './src/pages/task-list',
            {
              context: { title: '任务列表' },
            },
          ],
          'task-log': [
            './src/pages/task-log',
            {
              context: { title: '任务日志' },
            },
          ],
          upload: [
            './src/pages/upload',
            {
              context: { title: '文件上传' },
            },
          ],
          bedinfo: [
            './src/pages/bed',
            {
              context: { title: '床位管理' },
            },
          ],
          ctg: [
            './src/pages/ctg',
            {
              context: { title: '监护页' },
            },
          ],
        },
        html: {
          template: './src/common/document.ejs',
        },
        splitChunks: true,
      },
    ],
  ],
};
