import promise from 'es6-promise'
import axios from 'axios'
import qs from 'qs'

import router from '@/router'
import vuex from '@/store'
// import

import registryToast from './../components/common/toast/toast'
// Vue.use(registryToast)


promise.polyfill()

var domain = document.domain;

const Axios = axios.create({
  // baseURL: 'https://p2pjr.le.com:8888',
  // baseURL: 'http://10.75.165.244:8080/',
  // baseURL: 'https://' + domain + ':8091',
  // baseURL: '/p2pbg',
  // baseURL: 'http://' + domain + ':8080',
  // baseURL: 'http://p2p-test.letvjr.com:8080',
  baseURL: "http://10.75.164.45:8080",
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
  return config
}, err => {
})
//响应拦截
Axios.interceptors.response.use(response => {

  if (response.data.code === 200 || response.data.code === '200') {
    return response.data
  } else if (response.data.code === 401) {
    // console.log(response.data.message)
    Toast(response.data.message);
    vuex.commit('quit')
    sessionStorage.removeItem('Jurisdiction')
    sessionStorage.removeItem('menu')
    sessionStorage.removeItem('DistrictList')
    router.replace({ name: 'login' })
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
export function post (url, data) {
  return new Promise((resolve, reject) => {
    Axios.post(url, 
      qs.stringify(data),
      {
        headers:{
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

export function postJson (url, data) {
  return new Promise((resolve, reject) => {
    Axios.post(url, 
      data,
      {
        headers:{
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