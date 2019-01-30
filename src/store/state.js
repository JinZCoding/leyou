import {
  loadLogin,
  loadAccount,
  loadLocation
} from '../config/cache'

const state = {
  loginInfo: loadLogin(),
  account: loadAccount(),
  location: loadLocation()
}

export default state
