import {
  loadUser,
  loadLocation
} from '../config/cache'

const state = {
  userInfo: loadUser(),
  location: loadLocation()
}

export default state
