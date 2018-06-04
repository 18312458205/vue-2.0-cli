import axios from 'axios'

export const login = data => {
  return axios({
    method: 'post',
    url: '/api/login.php',
    data
  })
}

export const search = data => {
  return axios({
    method: 'get',
    url: '/api/search.php',
    params: data
  })
}

export const qdelete = data => {
  return axios({
    method: 'post',
    url: '/api/delete.php',
    data
  })
}
