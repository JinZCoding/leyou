import App from '../App'

const index = r => require.ensure([], () => r(require('../page/home/')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/')), 'login')

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
    // 首页
    {
      path: '/index',
      component: index
    },
    // 登录页
    {
      path: '/login',
      component: login
    }
  ]
}]