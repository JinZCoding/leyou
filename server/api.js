const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true // 多语句查询
});

module.exports = {
  // 获取首页swiperlist
  getSwiperList(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getSwiperList;
      connection.query(sql, [], (err, data) => {
        if (err) {
          console.log(err)
          var result = {
            "code": 500,
            "result": 0,
            "message": "服务器错误",
            "data": null
          }
          return res.json(result);
        } else {
          console.log("data", data)
          var result = {
            "code": 200,
            "result": 1,
            "message": null,
            "data": data
          }
          console.log(result)
          return res.json(result);
        }
        // connection.release();
      })
    })
  },
  // 登录
  login(req, res, next) {
    // console.log(req)
    console.log(req.body)
    var userid = req.body.userid;
    var password = req.body.password
    // console.log(userid, password)
    pool.getConnection((err, connection) => {
      var sql = sqlMap.login;
      connection.query(sql, [
        userid,
        password
      ], (err, data) => {
        if (err) {
          console.log(err)
          var result = {
            "code": 500,
            "result": 0,
            "message": "服务器错误",
            "data": null
          }
          return res.json(result);
        } else {
          console.log(data)
          var result = {
            "code": 200,
            "result": 1,
            "message": null,
            "data": data[0]
          }
          return res.json(result);
        }
        // connection.release();
      })
    })
  },
  // 获取用户信息
  getUserInfo(req, res, next) {
    var userid = req.body.userid;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getUserInfo;
      connection.query(sql, userid, (err, data) => {
        if (err) {
          console.log(err)
          var result = {
            "result": 0,
            "code": 500,
            "message": "服务器错误",
            "data": null
          }
          return res.json(result);
        } else {
          console.log(data)
          var result = {
            "result": 1,
            "code": 200,
            "message": null,
            "data": data[0]
          }
          return res.json(result);
        }
      })
    })
  },
  updateUserInfo(req, res, next) {
    console.log(req.body)
    var userid = req.body.userid;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.updateUserInfo;
      connection.query(sql, userid, (err, data) => {
        if (err) {
          console.log(err)
          var result = {
            "result": 0,
            "code": 500,
            "message": "服务器错误",
            "data": null
          }
          return res.json(result);
        } else {
          console.log(data)
          var result = {
            "result": 1,
            "code": 200,
            "message": null,
            "data": null
          }
          return res.json(result);
        }
      })
    })
  }
}
