import * as types from './mutation-types'
import {
  saveUser,
  saveLocation,
  removeUser
} from '../config/cache'

export const setUser = function ({commit}, obj) {
  commit(types.SET_USER_INFO, saveUser(obj))
}
export const signOut = function({commit}) {
  commit(types.REMOVE_USER, removeUser())
}

export const setLocation = function ({commit}, obj) {
  commit(types.SET_LOCATION, saveLocation(obj))
}
