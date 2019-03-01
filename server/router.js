// 后端 express 路由配置
const express = require('express');
const router = express.Router();
const api = require('./api');

const apiUrl = require('./apiUrl')
// const apiUrl = require('apiUrl/index')

// post方法通过body获取参数，需要使用body-parser，否则body为空
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
  extended: false
}));

router.post(apiUrl.getSwiperList, (req, res, next) => {
  api.getSwiperList(req, res, next);
})

router.post(apiUrl.getIndexArticleList, (req, res, next) => {
  api.getIndexArticleList(req, res, next);
})

router.post(apiUrl.login, (req, res, next) => {
  api.login(req, res, next);
})

router.post(apiUrl.getUserInfo, (req, res, next) => {
  api.getUserInfo(req, res, next);
})

router.post(apiUrl.updateUserInfo, (req, res, next) => {
  api.updateUserInfo(req, res, next);
})

router.post(apiUrl.queryArticleDetails, (req, res, next) => {
  api.queryArticleDetails(req, res, next);
})

router.post(apiUrl.queryAllReplyList, (req, res, next) => {
  api.queryAllReplyList(req, res, next);
})

router.post(apiUrl.queryNavigationInfoList, (req, res, next) => {
  api.queryNavigationInfoList(req, res, next)
})

router.post(apiUrl.queryLocalInfo, (req, res, next) => {
  api.queryLocalInfo(req, res, next)
})
// router.post('/setValue', (req, res, next) => {
//   api.setValue(req, res, next);
// });

module.exports = router;
