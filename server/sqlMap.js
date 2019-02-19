// sql语句

var sqlMap = {
  getSwiperList: 'SELECT * FROM swiper_list;',
  login: 'SELECT userid,username,avatar FROM user_info WHERE userid = (SELECT userid FROM users WHERE userid = ? and password = ?);',
  getUserInfo: 'SELECT userid,username,avatar,sex,birthday,address,autograph FROM user_info WHERE userid = ?;',
  updateUserInfo: "UPDATE user_info SET username = ?, avatar= ?, sex = ?, birthday = ?, address = ?, autograph = ? WHERE userid = ?;",
}

module.exports = sqlMap;
