// sql语句

var sqlMap = {
  getSwiperList: 'SELECT * FROM swiper_list;',
  // getIndexArticleList: 'SELECT * FROM article_list;',
  getIndexArticleList: `SELECT article_list.article_id, article_list.title, article_list.cover_img, article_list.summary, article_list.author_id, user_info.username author, user_info.avatar author_img
  FROM article_list, user_info
  WHERE article_list.author_id = user_info.userid;`,

  // 登录、个人信息模块   start
  login: 'SELECT userid,username,avatar FROM user_info WHERE userid = (SELECT userid FROM users WHERE userid = ? and password = ?);',
  getUserInfo: 'SELECT userid,username,avatar,sex,birthday,address,autograph FROM user_info WHERE userid = ?;',
  updateUserInfo: "UPDATE user_info SET username = ?, avatar= ?, sex = ?, birthday = ?, address = ?, autograph = ? WHERE userid = ?;",
  // 登录、个人信息模块   end


  // 文章详情页面相关（回复   start
  queryArticleDetails: `SELECT article_list.article_id, article_list.title, article_list.cover_img, article_list.updatetime, article_list.address, article_list.content, user_info.username author, user_info.avatar 
  FROM article_list, user_info 
  WHERE article_list.author_id = user_info.userid
  AND article_list.article_id = ?`, // 查询文章详情
  queryArticleReplyList: "SELECT * FROM reply_list WHERE article_id = ? LIMIT 5;", // 文章详情页面回复列表
  queryAllReplyList: "SELECT * FROM reply_list WHERE article_id = ?;", // 查询所有回复
  // 文章详情页面相关（回复   end

  // 各模块信息列表（ 攻略、游记可用 start
  queryBanner: "SELECT * FROM banner_article_list WHERE article_type = ?;", // 顶部导航文章
  queryHotArticleList: `SELECT article_list.article_id, article_list.title, article_list.cover_img, article_list.views,article_list.updatetime, article_list.author_id, user_info.username author, user_info.avatar author_img
  FROM hot_article_list,article_list, user_info
  WHERE hot_article_list.article_id = article_list.article_id
  AND article_list.author_id = user_info.userid
  AND hot_article_list.article_type = ?;`, // 热门文章
  queryNewArticleList: `SELECT article_list.article_id, article_list.title, article_list.address, article_list.author_id, user_info.username author, user_info.avatar author_img
  FROM article_list, user_info
  WHERE article_list.author_id = user_info.userid 
  AND article_type = ?;`, //最新文章（普通文章列表
  // 各模块信息列表（ 攻略、游记可用 end

  // local模块 start
  queryLocalInfo: "SELECT * FROM city_info_list WHERE pinyin = ?;", // local页面详情
  queryLocalFood: "SELECT * FROM city_food_list WHERE cityCode = ?;", // local页面food
  queryLocalPlay: "SELECT * FROM city_play_list WHERE cityCode = ?;", // local页面play
  queryLocalArticleList: `SELECT article_list.article_id, article_list.title, article_list.cover_img, article_list.views, article_list.address, article_list.address_pinyin,article_list.author_id, user_info.username author, user_info.avatar author_img
  FROM article_list, user_info
  WHERE article_list.author_id = user_info.userid 
  AND address_pinyin = ?;`, // local页面当地攻略
  // local模块 end

  // 随记模块  start
  queryRecordInfo: "SELECT * FROM record_list",
  // 随记模块  end

  // 发布文章
  releaseArticle: "INSERT INTO article_list ( article_id, author_id, article_type, title, content, summary, address, address_pinyin, updatetime,views ) VALUES ( ?,?,?,?,?,?,?,?,?,0 );",
  // updateArticleUserInfo: "UPDATE article_list SET (author, author_img) = (SELECT (username, avatar) FROM user_info WHERE userid = ?) WHERE article_id = ?",


}

module.exports = sqlMap;
