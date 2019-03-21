// 连接数据库，各种方法实现

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
          // console.log("data", data)
          var result = {
            "code": 200,
            "result": 1,
            "message": null,
            "data": data
          }
          // console.log(result)
          return res.json(result);
        }
        // connection.release();
      })
    })
  },
  // 获取首页list
  getIndexArticleList(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getIndexArticleList;
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
          // console.log("data", data)
          var result = {
            "code": 200,
            "result": 1,
            "message": null,
            "data": data
          }
          // console.log(result)
          return res.json(result);
        }
        // connection.release();
      })
    })
  },

  // 登录、个人信息模块
  // 登录
  login(req, res, next) {
    // console.log(req)
    // console.log(req.body)
    var userid = req.body.userid;
    var password = req.body.password
    // console.log(userid, password)
    pool.getConnection((err, connection) => {
      var sql = sqlMap.login;
      connection.query(sql, [
        userid,
        password
      ], (err, data) => {
        // console.log(err, data)
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
          // console.log(data.length)
          let len = data.length
          if (!len) {
            var result = {
              "code": 401,
              "result": 0,
              "message": "请输入正确的账号密码",
              "data": null
            }
            return res.json(result);
          } else {
            // console.log("eeeeeeeeeeeeee")
            var result = {
              "code": 200,
              "result": 1,
              "message": null,
              "data": data[0]
            }
            return res.json(result);
          }
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
          // console.log(data)
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
  // 修改用户信息
  updateUserInfo(req, res, next) {
    // console.log("bodyyyyyyyyyyyy", req.body)
    let updateUser_Params = [req.body.username, req.body.avatar, req.body.sex, req.body.birthday, req.body.address, req.body.autograph, req.body.userid]
    // var userid = req.body.userid;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.updateUserInfo;
      connection.query(sql, updateUser_Params, (err, data) => {
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
          // console.log(data)
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
  },

  // 文章详情页面相关（回复
  // 查看文章内容
  queryArticleDetails(req, res, next) {
    // console.log(req)
    let id = req.body.article_id
    pool.getConnection((err, connection) => {
      let sql = sqlMap.queryArticleDetails;
      let sql2 = sqlMap.queryArticleReplyList;
      // let sql3 = sqlMap.queryArticleDetails;
      connection.query(sql, id, (err, data) => {
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
          // console.log("data", data)
          connection.query(sql2, id, (err, data1) => {
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
              var result = {
                "code": 200,
                "result": 1,
                "message": null,
                "data": {
                  articleDetails: data[0],
                  replylist: data1
                }
              }
              // console.log(result)
              return res.json(result);
            }
            // connection.release();
          })
        }
      })
    })
  },
  // 查询回复列表
  queryAllReplyList(req, res, next) {
    let id = req.body.article_id
    pool.getConnection((err, connection) => {
      var sql = sqlMap.queryAllReplyList;
      connection.query(sql, id, (err, data) => {
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
          // console.log(data)
          var result = {
            "result": 1,
            "code": 200,
            "message": null,
            "data": data
          }
          return res.json(result);
        }
      })
    })
  },

  // 各模块信息列表（ 攻略、游记可用 start
  // 查询各模块列表信息
  queryNavigationInfoList(req, res, next) {
    // console.log(req.body)
    let type = req.body.type
    pool.getConnection((err, connection) => {
      var sql = [sqlMap.queryBanner, sqlMap.queryHotArticleList, sqlMap.queryNewArticleList];
      connection.query(sql[0], type, (err, data) => {
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
          connection.query(sql[1], type, (err, data1) => {
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
              connection.query(sql[2], type, (err, data2) => {
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
                  var result = {
                    "result": 1,
                    "code": 200,
                    "message": null,
                    "data": {
                      banner: data[0],
                      hotList: data1,
                      newList: data2
                    }
                  }
                  return res.json(result);
                }
              })
            }
          })
        }
      })
    })
  },

  // local模块
  queryLocalInfo(req, res, next) {
    // console.log(req.body)
    let city = req.body.city
    pool.getConnection((err, connection) => {
      var sql = [sqlMap.queryLocalInfo, sqlMap.queryLocalFood, sqlMap.queryLocalPlay, sqlMap.queryLocalArticleList];
      connection.query(sql[0], city, (err, data) => {
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
          connection.query(sql[1], city, (err, data1) => {
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
              connection.query(sql[2], city, (err, data2) => {
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
                  connection.query(sql[3], city, (err, data3) => {
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
                      var result = {
                        "result": 1,
                        "code": 200,
                        "message": null,
                        "data": {
                          cityInfo: data[0],
                          cityFood: data1,
                          cityPlay: data2,
                          articleList: data3
                        }
                      }
                      return res.json(result);
                    }
                  })
                }
              })
            }
          })
        }
      })
    })
  },

  // 随记模块
  queryRecordInfo(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.queryRecordInfo;
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
          // console.log("data", data)
          var result = {
            "code": 200,
            "result": 1,
            "message": null,
            "data": data
          }
          // console.log(result)
          return res.json(result);
        }
        // connection.release();
      })
    })
  },

  // 发布新文章releaseArticle
  releaseArticle(req, res, next) {
    let art = req.body
    console.log(art)
    var article_id = ""; // 文章编号
    const now = new Date()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    // 时间
    let updatetime = now.getFullYear().toString() + '-' + (month.toString()).padStart(2, "0") + '-' + (day.toString()).padStart(2, "0")
    // 文章编号
    article_id = now.getFullYear().toString() + (month.toString()).padStart(2, "0") + (day.toString()).padStart(2, "0") + (hour.toString()).padStart(2, "0") + (minutes.toString()).padStart(2, "0") + (seconds.toString()).padStart(2, "0") + (Math.round(Math.random() * 89 + 100)).toString()
    // console.log(article_id, updatetime)
    pool.getConnection((err, connection) => {
      var sql = sqlMap.releaseArticle;
      connection.query(sql, [article_id, art.userid, art.article_type, art.title, art.content, art.summary, art.address, art.address_pinyin, updatetime], (err, data) => {
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
          var result = {
            "code": 200,
            "result": 1,
            "message": null,
            "data": null
          }
          return res.json(result);
        }
      })
    })
  }

}
