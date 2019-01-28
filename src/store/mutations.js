import * as types from './mutation-types'

const mutations = {
  [types.SET_USER_INFO](state, obj) {
    // console.log(obj)
    state.userInfo = obj
    // console.log(state.userInfo)
  },
  [types.REMOVE_USER](state, obj) {
    state.userInfo = {}
  },
  [types.SET_LOCATION](state, obj) {
    state.location = obj
  }
}

export default mutations
