import axios from 'axios'
import qs from 'qs'

const Axios = axios.create({
  timeout: 60000,
  transformRequest: [function (data) {
    data = qs.stringify(data)
    return data
  }]
})

Axios.defaults.headers['Cache-Control'] = 'no-cache'
Axios.defaults.headers['Pragma'] = 'no-cache'

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (localStorage.token) {
    config.headers.Authorization = localStorage.token
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default Axios
