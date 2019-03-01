import {
  loadLogin,
  loadAccount,
  loadLocation
} from '../config/cache'

const state = {
  LOADING: false,

  loginInfo: loadLogin(),
  account: loadAccount(),
  location: loadLocation()
}

export default state
