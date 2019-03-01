import * as types from './mutation-types'

const mutations = {
  // loading
  [types.SHOW_LOADING](state) {
    state.LOADING = true
  },
  [types.HIDE_LOADING](state) {
    state.LOADING = false
  },

  // 登录
  [types.SET_LOGIN_INFO](state, obj) {
    state.loginInfo = obj
  },
  [types.SET_ACCOUNT](state, obj) {
    state.account = obj
  },
  // 退出
  [types.REMOVE_LOGIN](state, obj) {
    state.loginInfo = {}
  },
  [types.REMOVE_ACCOUNT](state, obj) {
    state.account = {}
  },
  // 位置
  [types.SET_LOCATION](state, obj) {
    state.location = obj
  }
}

export default mutations
