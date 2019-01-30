// mock数据
export const mockData = {
  // Mock.mock(apiUrl.loginInfo, 'post', {
  //   'code': 200,
  //   'data|3': [{
  //     'num': Mock.mock('@id()'),
  //     'enterpriseNum': Mock.mock('@id()'),
  //     'enterpriseName|1': Mock.mock('@cword(3, 5)'),
  //     'date': Mock.mock('@date("yyyy-MM-dd")'),
  //     'link|1': ['金融逾期', '同盾数据(最终审核)', '多头借贷', '系统规则', '人工审核'],
  //     'state|1': ['通过', '不通过', '待审核'],
  //     'finalState|1': ['通过', '不通过']
  //   }],
  //   'msg': '查询结果返回22222'/\/api\/p2p\/enterprise\/loginInfo/
  // })

  /*---------------------上面的不要删，mock数据从这里开始--------------------------*/
  loginInfo: {
    "result": 1,
    "code": 200,
    "message": null,
    "data": {
      userid: "12345",
      userName: "阿圣嗷嗷嗷吼",
      avatar: "../../static/img/head_5.jpg"
    }
  },
  userInfo: {
    "result": 1,
    "code": 200,
    "message": null,
    "data": {
      userid: "12345",
      userName: "阿圣嗷嗷嗷吼",
      avatar: "../../static/img/head_5.jpg",
      sex: "女",
      birthday: "1996-06-05",
      address: "北京市 北京市 西城区",
      autograph: ""
    }
  },
  saveChange: {
    "result": 1,
    "code": 200,
    "message": null,
    "data": null
  }
}
