import App from '../App'

const index = r => require.ensure([], () => r(require('../page/home/')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/')), 'login')
const city = r => require.ensure([], () => r(require('../page/city/')), 'city')
const note = r => require.ensure([], () => r(require('../page/note/')), 'note')
const strategy = r => require.ensure([], () => r(require('../page/strategy/')), 'strategy')
const companions= r => require.ensure([], () => r(require('../page/companions/')), 'companions')
const localplay = r => require.ensure([], () => r(require('../page/localplay/')), 'localplay')

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
      path: '/companions',
      name: companions,
      component: companions
    },
    // 当地游玩
    {
      path: '/localplay',
      name: localplay,
      component: localplay
    },

  ]
}]