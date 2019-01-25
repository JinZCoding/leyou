import App from '../App'

const login = r => require.ensure([], () => r(require('../page/login/')), 'login')
const index = r => require.ensure([], () => r(require('../page/home/')), 'home')
const profile = r => require.ensure([], () => r(require('../page/profile/')), 'profile')

const personal = r => require.ensure([], () => r(require('../page/profile/children/personal')), 'personal')
const interest = r => require.ensure([], () => r(require('../page/profile/children/interest')), 'interest')
const mywritten = r => require.ensure([], () => r(require('../page/profile/children/mywritten')), 'mywritten')


const search = r => require.ensure([], () => r(require('../page/search/')), 'search')
const release = r => require.ensure([], () => r(require('../page/release/')), 'release')
const release1 = r => require.ensure([], () => r(require('../page/release/demo')), 'release1')
const releaseSuccess = r => require.ensure([], () => r(require('../page/release/children/success')), 'releaseSuccess')

const city = r => require.ensure([], () => r(require('../page/city/')), 'city')
const note = r => require.ensure([], () => r(require('../page/note/')), 'note')
const strategy = r => require.ensure([], () => r(require('../page/strategy/')), 'strategy')
const record = r => require.ensure([], () => r(require('../page/record/')), 'record')
const localplay = r => require.ensure([], () => r(require('../page/localplay/')), 'localplay')
const article = r => require.ensure([], () => r(require('../page/article/')), 'article')
const reply = r => require.ensure([], () => r(require('../page/article/components/replypage')), 'reply')

export default [{
  path: '/',
  component: App, //顶级路由
  children: [
    // 二级路由
    // 地址为空 跳转到index页
    {
      path: '',
      redirect: '/index',
    },
    // 登录页
    {
      path: '/login',
      name: login,
      component: login
    },
    // 首页
    {
      path: '/index',
      name: index,
      component: index
    },
    // 个人信息
    {
      path: '/profile',
      name: profile,
      component: profile,
      children: [
        // 编辑个人资料
        {
          path: 'personal',
          name: personal,
          component: personal
        },
        {
          path: 'interest',
          name: interest,
          component: interest
        },
        {
          path: 'mywritten',
          name: mywritten,
          component: mywritten
        }
      ]
    },
    // 搜索
    {
      path: '/search',
      name: search,
      component: search
    },
    // 发布
    {
      path: '/release',
      name: release,
      component: release,
      children: [{
        path: 'success',
        name: releaseSuccess,
        component: releaseSuccess
      }]
    },
    // 发布测试
    {
      path: '/release1',
      name: release1,
      component: release1
    },
    // 选择城市
    {
      path: '/city',
      name: city,
      component: city
    },
    // 游记
    {
      path: '/note',
      name: note,
      component: note
    },
    // 攻略
    {
      path: '/strategy',
      name: strategy,
      component: strategy
    },
    // 结伴
    {
      path: '/record',
      name: record,
      component: record
    },
    // 当地游玩
    {
      path: '/localplay',
      name: localplay,
      component: localplay
    },
    // 文章页面
    {
      path: '/article/:id',
      name: article,
      component: article,

    },
    // 回复
    {
      path: '/reply',
      name: reply,
      component: reply
    }
  ]
}]
