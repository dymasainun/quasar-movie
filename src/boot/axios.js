
import axios from 'axios'

axios.defaults.baseURL = 'http://www.omdbapi.com/'
axios.defaults.params = {
  key: 'c0771d02'
}

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios
}
