const express = require('express');
const router = express.Router();
const api = require('./api');

// const apiUrl = require('./apiUrl')
// const apiUrl = require('apiUrl/index')

// post方法通过body获取参数，需要使用body-parser，否则body为空
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

router.use(bodyParser.urlencoded({
  extended: false
}));

router.post('/leyou/index/getSwiperList', (req, res, next) => {
  api.login(req, res, next);
})

router.post('/leyou/user/login', (req, res, next) => {
  api.login(req, res, next);
})

router.post('/leyou/user/getUserInfo', (req, res, next) => {
  api.getUserInfo(req, res, next);
})

router.post('/leyou/user/updateUserInfo', (req, res, next) => {
  api.updateUserInfo(req, res, next);
})

// router.post('/setValue', (req, res, next) => {
//   api.setValue(req, res, next);
// });

module.exports = router;
