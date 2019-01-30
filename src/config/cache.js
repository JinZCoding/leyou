// import storage from 'good-storage'
import {
  setStore,
  getStore,
  removeStore
} from './util'

// 登录信息
const LOGIN_INFO = '__loginInfo__'
const ACCOUNT = '__account__'
const LOCATION = '__location__'

// 登录信息
export function saveLogin(obj) {
  let loginInfo = obj
  setStore(LOGIN_INFO, obj)
  return loginInfo
}

export function loadLogin(obj) {
  return getStore(LOGIN_INFO)
}
// 账户信息
export function saveAccount(obj) {
  let account = obj
  setStore(ACCOUNT, obj)
  return account
}

export function loadAccount(obj) {
  return getStore(ACCOUNT)
}

// 退出
export function removeLogin(obj) {
  return removeStore(LOGIN_INFO)
}

export function removeAccount(obj) {
  return removeStore(ACCOUNT)
}

export function saveLocation(obj) {
  let location = obj
  setStore(LOCATION, obj)
  return location
}

export function loadLocation(obj) {
  return getStore(LOCATION, {})
}
