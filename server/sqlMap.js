// sql语句

var sqlMap = {
  getSwiperList: 'SELECT * FROM swiper_list;',
  getIndexArticleList: 'SELECT * FROM article_list;',
  
  login: 'SELECT userid,username,avatar FROM user_info WHERE userid = (SELECT userid FROM users WHERE userid = ? and password = ?);',
  getUserInfo: 'SELECT userid,username,avatar,sex,birthday,address,autograph FROM user_info WHERE userid = ?;',
  updateUserInfo: "UPDATE user_info SET username = ?, avatar= ?, sex = ?, birthday = ?, address = ?, autograph = ? WHERE userid = ?;",

  queryArticleDetails: "SELECT title,updatetime,address,content FROM article_list WHERE article_id = ?;", // 查询文章详情
  queryArticleReplyList: "SELECT * FROM reply_list WHERE article_id = ? LIMIT 5;", // 文章详情页面回复列表
  queryAllReplyList: "SELECT * FROM reply_list WHERE article_id = ?;", // 查询所有回复

  // 各模块信息列表（标题，封面，浏览量，作者，作者头像，摘要，地点）
  queryBanner: "SELECT * FROM banner_article_list WHERE article_type = ?;", // 顶部导航文章
  queryHotArticleList: "SELECT * FROM hot_article_list WHERE article_type = ?;", // 热门文章
  queryNewArticleList: "SELECT * FROM article_list WHERE article_type = ?;", //最新文章（普通文章列表

}

module.exports = sqlMap;
