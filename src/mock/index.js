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

// console.log("mockData", mockData)

// 登录
Mock.mock(apiUrl.login, 'post', mockData.login);
// 用户信息
Mock.mock(apiUrl.getUserInfo, 'post', mockData.getUserInfo);
// 修改信息
Mock.mock(apiUrl.setUserChange, 'post', mockData.setUserChange);
// 我感兴趣的
Mock.mock(apiUrl.queryMyInterest, 'post', mockData.queryMyInterest);
// 我的文章
Mock.mock(apiUrl.queryMyArticle, 'post', mockData.queryMyArticle);
