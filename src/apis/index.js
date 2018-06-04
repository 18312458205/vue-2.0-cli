import axios from 'axios'

let baseURL
if (process.env.NODE_ENV === 'development') {
  baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://2.vueadminfront.applinzi.com/dist/project1/'
}

export const login = data => {
  return axios({
    method: 'post',
    url: baseURL + '/login.php',
    data
  })
}

export const search = data => {
  return axios({
    method: 'get',
    url: baseURL + '/search.php',
    params: data
  })
}

export const qdelete = data => {
  return axios({
    method: 'post',
    url: baseURL + '/delete.php',
    data
  })
}
