import * as types from './mutation-types'

const mutations = {
  [types.SET_USER_INFO](state, data) {
    state.userInfo = data
  },
  [types.SET_LOCATION](state, data) {
    state.location = data
  }
}

export default mutations
