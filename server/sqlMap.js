// sql语句

var sqlMap = {
  getSwiperList: 'SELECT * FROM swiper_list;',
  getIndexArticleList: 'SELECT * FROM article_list;',

  // 登录、个人信息模块   start
  login: 'SELECT userid,username,avatar FROM user_info WHERE userid = (SELECT userid FROM users WHERE userid = ? and password = ?);',
  getUserInfo: 'SELECT userid,username,avatar,sex,birthday,address,autograph FROM user_info WHERE userid = ?;',
  updateUserInfo: "UPDATE user_info SET username = ?, avatar= ?, sex = ?, birthday = ?, address = ?, autograph = ? WHERE userid = ?;",
  // 登录、个人信息模块   end


  // 文章详情页面相关（回复   start
  queryArticleDetails: "SELECT title,updatetime,address,content FROM article_list WHERE article_id = ?;", // 查询文章详情
  queryArticleReplyList: "SELECT * FROM reply_list WHERE article_id = ? LIMIT 5;", // 文章详情页面回复列表
  queryAllReplyList: "SELECT * FROM reply_list WHERE article_id = ?;", // 查询所有回复
  // 文章详情页面相关（回复   end

  // 各模块信息列表（ 攻略、游记可用 start
  queryBanner: "SELECT * FROM banner_article_list WHERE article_type = ?;", // 顶部导航文章
  queryHotArticleList: "SELECT * FROM hot_article_list WHERE article_type = ?;", // 热门文章
  queryNewArticleList: "SELECT * FROM article_list WHERE article_type = ?;", //最新文章（普通文章列表
  // 各模块信息列表（ 攻略、游记可用 end

  // local模块 start
  queryLocalInfo: "SELECT * FROM city_info_list WHERE pinyin = ?;", // local页面详情
  queryLocalFood: "SELECT * FROM city_food_list WHERE cityCode = ?;", // local页面food
  queryLocalPlay: "SELECT * FROM city_play_list WHERE cityCode = ?;", // local页面play
  queryLocalArticleList: "SELECT * FROM article_list WHERE address_pinyin = ?;", // local页面当地攻略
  // local模块 end

  // 随记模块  start
  queryRecordInfo: "SELECT * FROM record_list",
  // 随记模块  end


}

module.exports = sqlMap;
