import * as types from './mutation-types'

export const setUser = function ({commit}) {
  commit(types.SET_USER_INFO)
}

export const setLocation = function ({commit}) {
  commit(types.SET_LOCATION)
}
