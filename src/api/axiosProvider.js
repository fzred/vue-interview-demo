import Axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

let axiosProvider = Axios.create({
  // baseURL: process.env.API_BASE_URL,
  baseURL: 'https://api.jyb.com.tw',
  timeout: 30000
})

// 请求拦截
axiosProvider.interceptors.request.use(function (config) {
  NProgress.start()

  // 每次请求增加 query 参数 accessToken
  config.url +=
    (config.url.indexOf('?') === -1 ? '?' : '&') +
    'accessToken=' +
    encodeURIComponent(localStorage.getItem('accessToken'))
  return config
})

// 响应拦截
axiosProvider.interceptors.response.use(
  function (res) {
    NProgress.done()

    if (res.data.error) {
      console.log(res.data.error)
      alert('Error (2xx):\n' + JSON.stringify(res.data.error, null, 4))
    }

    return res
  },
  function (error) {
    NProgress.done()

    if (error.response) {
      console.log(error.response)
      alert(error.response.status + ' ' + error.response.data.name + ' \n' + error.response.data.message)

      // 认证失败，登出
      if (error.response.status === 401) {
        localStorage.removeItem('accessToken')
        location.href = '#/login'
      }
    } else {
      console.log(error)
      alert('Error:\n' + (error.message || error.Error.message))
    }

    return Promise.reject(error)
  }
)

export default axiosProvider
