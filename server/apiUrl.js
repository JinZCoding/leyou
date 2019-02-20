// 接口列表

var apiUrl = {
  getSwiperList: '/leyou/index/getSwiperList', // 获取首页swiperlist
  login: '/leyou/user/login', // 登录
  getUserInfo: '/leyou/user/getUserInfo', // 获取用户信息
  updateUserInfo: '/leyou/user/updateUserInfo', // 修改用户信息
  queryArticleDetails: '/leyou/article/queryArticleDetails', // 查看文章queryAllReplyList
  queryAllReplyList: '/leyou/article/queryAllReplyList', // 查看回复
  queryNavigationInfoList: '/leyou/index/queryNavigationInfoList' // 查询各模块列表信息
}

module.exports = apiUrl;
