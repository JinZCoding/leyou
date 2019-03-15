// 接口列表

var apiUrl = {
  getSwiperList: '/leyou/index/getSwiperList', // 获取首页swiperlist
  getIndexArticleList: '/leyou/index/getIndexArticleList', // 首页文章列表
  login: '/leyou/user/login', // 登录
  getUserInfo: '/leyou/user/getUserInfo', // 获取用户信息
  updateUserInfo: '/leyou/user/updateUserInfo', // 修改用户信息
  queryArticleDetails: '/leyou/article/queryArticleDetails', // 查看文章queryAllReplyList
  queryAllReplyList: '/leyou/article/queryAllReplyList', // 查看回复
  queryNavigationInfoList: '/leyou/index/queryNavigationInfoList', // 查询各模块列表信息
  queryLocalInfo: '/leyou/local/queryLocalInfo', //查询当地游玩页面内容
  queryRecordInfo: '/leyou/record/queryRecordInfo', // 查询随记内容 
  releaseArticle: '/leyou/release/releaseArticle', //发布新文章
  // 获取作者信息
}

module.exports = apiUrl;
