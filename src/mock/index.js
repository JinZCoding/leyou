import {
  mockData
} from 'mockData/mockdata'

import {
  Random
} from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）

import {
  apiUrl
} from 'apiUrl/index'

const Mock = require('mockjs')
Mock.setup({
  timeout: 1000 //设置请求延时时间
})

console.log("mockData", mockData)

Mock.mock(apiUrl.login, 'post', mockData.loginInfo);
Mock.mock(apiUrl.getUserInfo, 'post', mockData.userInfo);
//setUserChange
Mock.mock(apiUrl.setUserChange, 'post', mockData.saveChange);
