import axios from 'axios'

export const login = data => {
  return axios({
    method: 'post',
    url: '/api/user_login.php',
    data
  })
}
