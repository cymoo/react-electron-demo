import { fetchWithGet } from './utils'
import config from '../config'

const SERVER_ADDR = config.SERVER_ADDR

function fetchUser(id) {
  return fetchWithGet(`${SERVER_ADDR}/users/${id}`)
}

export { fetchUser }
