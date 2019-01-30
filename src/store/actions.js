import * as types from './mutation-types'
import {
  saveLogin,
  saveAccount,
  removeLogin,
  removeAccount,
  saveLocation
} from '../config/cache'

// 登录
export const setLogin = function ({
  commit
}, obj) {
  // console.log(obj)
  commit(types.SET_LOGIN_INFO, saveLogin(obj.login))
  commit(types.SET_ACCOUNT, saveAccount(obj.account))
}
// 退出登录
export const signOut = function ({
  commit
}) {
  commit(types.REMOVE_LOGIN, removeLogin())
  commit(types.REMOVE_ACCOUNT, removeAccount())
}

// 位置信息
export const setLocation = function ({
  commit
}, obj) {
  commit(types.SET_LOCATION, saveLocation(obj))
}
