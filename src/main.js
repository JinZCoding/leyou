// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

import './assets/iconfont/iconfont.css'

// 导入vant UI
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

//引入swiper
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import promise from 'es6-promise'
promise.polyfill()

// axios
import axios from 'axios';
import qs from 'qs';
Vue.prototype.$axios = axios;
import { post, get,postJson } from '@/Axios'

Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$postJson = postJson


// 注册自定义toast组件
import registryToast from './components/common/toast/toast'
Vue.prototype.$toast = registryToast.showToast;

Vue.config.productionTip = false

Vue.prototype.qs = qs;

// 在这句话之前写
Vue.prototype.$http = axios;
// Vue.prototype.$http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 去掉url默认的锚点#
  routes
})

/* eslint-disable no-new */
new Vue({
  router,

}).$mount('#app')
