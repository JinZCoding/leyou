// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

// import '!style-loader!css-loader!sass-loader./assets/scss/mixin.scss'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 去掉url默认的锚点#
  routes
})

/* eslint-disable no-new */
new Vue({
  router,

}).$mount('#app')
