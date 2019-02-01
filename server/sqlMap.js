var sqlMap = {
  getSwiperList: 'SELECT * FROM swiper_list;',
  login: 'SELECT userid,username,avatar FROM user_info WHERE userid = (SELECT userid FROM users WHERE userid = ? and password = ?);',
  getUserInfo: 'SELECT userid,username,avatar,sex,birthday,address,autograph FROM user_info WHERE userid = ?;',
  updateUserInfo: "UPDATE user_info SET username = '阿圣嗷嗷嗷', avatar= '../../static/img/head_4.jpg', sex = '男', birthday = '1990-11-21', address = '北京市 北京市 朝阳区', autograph = '哈哈哈~来抓我呀' WHERE userid = ?;",
}

module.exports = sqlMap;
