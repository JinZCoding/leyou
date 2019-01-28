// import storage from 'good-storage'
import {
  setStore,
  getStore,
  removeStore
} from './util'

// 登录信息
const USER_INFO = '__userinfo__'
const LOCATION = '__location__'

export function saveUser(obj) {
  let userinfo = obj
  setStore(USER_INFO, obj)
  return userinfo
}

export function loadUser(obj) {
  return getStore(USER_INFO)
}

export function removeUser(obj) {
  return removeStore(USER_INFO)
}

export function saveLocation(obj) {
  let location = obj
  setStore(LOCATION, obj)
  return location
}

export function loadLocation(obj) {
  return getStore(LOCATION, {})
}
