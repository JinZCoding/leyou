import promise from 'es6-promise'
import axios from 'axios'
import qs from 'qs'

import router from '@/router'
import vuex from '@/store'
import * as types from '@/store/mutation-types.js'
// import

import registryToast from './../components/common/toast/toast'
// Vue.use(registryToast)


promise.polyfill()

var domain = document.domain;

const Axios = axios.create({
  // baseURL: 'http://' + domain + ':8686',
  // baseURL: "http://localhost:8686",
  // baseURL: "http://10.75.164.145:8686",
  // baseURL: "http://result.eolinker.com/1jG6qBQ3e65187cd2ccd1c84b8ed4178b1d2cf4d5dd6d72?uri=",
  timeout: 10000,
  responseType: 'json',
  withCredentials: true, //携带cookie
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;application/json'
    // 'Content-Type': 'application/json;charset=utf-8;text/javascript;*/*'
  }
})
//请求拦截
Axios.interceptors.request.use(config => {
  // config.data = qs.stringify(config.data) //参数格式化
  vuex.commit(types.SHOW_LOADING);
  return config
}, err => {
  vuex.commit(types.HIDE_LOADING);
})
//响应拦截
Axios.interceptors.response.use(response => {
  vuex.commit(types.HIDE_LOADING);
  // return response.data
  if (response.data.code === 200 || response.data.code === '200') {
    return response.data
  } else if (response.data.code === 401) {
    Toast(response.data.message);
    router.replace({
      name: 'login'
    })
  } else {
    // console.log(response.data.message)
    Toast(response.data.message);
    // 用户未登录
    if (response.data.code === 5036) {
      router.replace({
        path: "/login"
      });
    }
    return Promise.reject(response.data.data)
  }
}, err => {
  // console.log("服务器开小差了，请重试")
  vuex.commit(types.HIDE_LOADING);
  Toast("服务器开小差了，请重试");
  return Promise.reject(err)
})
// export function post(url, data) {
//   return new Promise((resolve, reject) => {
//     Axios.post(url, data).then(response => {
//       resolve(response)
//     }, err => {
//       reject(err)
//     }).catch()
//   })
// }
export function post(url, data) {
  return new Promise((resolve, reject) => {
    Axios.post(url,
      qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    }).catch()
  })
}

export function get(url, data) {
  return new Promise((resolve, reject) => {
    Axios.get(url, {
      params: data
    }).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    }).catch()
  })
}

export function postJson(url, data) {
  return new Promise((resolve, reject) => {
    Axios.post(url,
      data, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    }).catch()
  })
}


// var _this = this;
function Toast(message) {
  // registryToast('ghhjkhjjjjjj');
  registryToast.showToast(message)
  // console.log('fdfdd=======>', registryToast.showToast());
  // _this.$toast(message);
}
