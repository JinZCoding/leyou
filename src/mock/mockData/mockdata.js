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
  // 登录
  login: {
    "result": 1,
    "code": 200,
    "message": null,
    "data": {
      userid: "12345",
      userName: "阿圣嗷嗷嗷吼",
      avatar: "../../static/img/head_5.jpg"
    }
  },
  // 用户信息
  getUserInfo: {
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
  // 保存修改
  setUserChange: {
    "result": 1,
    "code": 200,
    "message": null,
    "data": null
  },
  // 我感兴趣的
  queryMyInterest: {
    "result": 1,
    "code": 200,
    "message": null,
    "data": {
      "likes": [
        {
          "id": "000001",
          "title": "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
        {
          "id": "000002",
          "title": "嘿"
        },
        {
          "id": "000003",
          "title": "咚咚锵咚咚锵七个隆冬呛咚呛"
        },
        {
          "id": "000004",
          "title": "乖乖龙迪龙"
        },
        {
          "id": "000012",
          "title": "我开始美丽的际遇"
        },
        {
          "id": "000013",
          "title": "我愿意陪着你去东和西"
        },
        {
          "id": "000014",
          "title": "收到需要赶快回复的信息"
        },
        {
          "id": "000015",
          "title": "那就考虑看看是不是要回应你"
        },
        {
          "id": "000016",
          "title": "如果说以后都不用对你讲客气"
        },
        {
          "id": "000017",
          "title": "我就等着对你说一句欢迎光临"
        },
        {
          "id": "000018",
          "title": "你来自东或西"
        },
        {
          "id": "000019",
          "title": "都没有太大的关系"
        },
        {
          "id": "000020",
          "title": "都听你"
        },
        {
          "id": "000021",
          "title": "都听你"
        },
        {
          "id": "000022",
          "title": "都听你"
        }
      ],
      "favorites": [{
          "id": "000018",
          "title": "你来自东或西"
        },
        {
          "id": "000019",
          "title": "都没有太大的关系"
        },
        {
          "id": "000020",
          "title": "都听你"
        },
        {
          "id": "000021",
          "title": "都听你"
        },
        {
          "id": "000022",
          "title": "都听你"
        }
      ],
      "praises": [{
          "id": "000014",
          "title": "收到需要赶快回复的信息"
        },
        {
          "id": "000015",
          "title": "那就考虑看看是不是要回应你"
        },
        {
          "id": "000016",
          "title": "如果说以后都不用对你讲客气"
        },
        {
          "id": "000017",
          "title": "我就等着对你说一句欢迎光临"
        },
        {
          "id": "000018",
          "title": "你来自东或西"
        }
      ]
    }
  },
  // 我的文章
  queryMyArticle: {
    "result": 1,
    "code": 200,
    "message": null,
    "data": {
      "travels": [
        {
          "id": "000003",
          "title": "咚咚锵咚咚锵七个隆冬呛咚呛"
        },
        {
          "id": "000004",
          "title": "乖乖龙迪龙"
        },
        {
          "id": "000012",
          "title": "我开始美丽的际遇"
        },
        {
          "id": "000013",
          "title": "我愿意陪着你去东和西"
        },
        {
          "id": "000014",
          "title": "收到需要赶快回复的信息"
        },
        {
          "id": "000015",
          "title": "那就考虑看看是不是要回应你"
        },
        {
          "id": "000016",
          "title": "如果说以后都不用对你讲客气"
        },
        {
          "id": "000017",
          "title": "我就等着对你说一句欢迎光临"
        }
      ],
      "strategy": [{
          "id": "000018",
          "title": "你来自东或西"
        },
        {
          "id": "000019",
          "title": "都没有太大的关系"
        },
        {
          "id": "000020",
          "title": "都听你"
        }
      ],
      "evaluate": [{
          "id": "000014",
          "title": "哈哈哈哈哈哈"
        },
        {
          "id": "000015",
          "title": "楼主写的太好了"
        },
        {
          "id": "000016",
          "title": "我也好想去这里的~"
        },
        {
          "id": "000017",
          "title": "我就等着对你说一句欢迎光临"
        },
        {
          "id": "000018",
          "title": "真喜欢啊，太棒了"
        }
      ]
    }
  }
}
