import axios from 'axios';

axios.interceptors.request.use(
  config => {
    // 判断是否是提交文件，还是常规请求
    if (config.data instanceof FormData) {
      config.headers = {
        'Content-Type': 'multipart/form-data' // 此处格式自定义
      }
    } else {
      config.data = JSON.stringify(config.data)
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded', // 此处格式自定义
        /* token: getLocalStorage('token') */
      }
    }
    config.withCredentials = true
    config.timeout = 5000    // 超时时间
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  res => {
    let data = res.data
    if (res.statusCode !== 200) {
      if (data.failureReason === 4011 || data.failureReason === 4012) {
        console.log('需要重新登录')
      }
    } else {
      if (data.resultStates === 0) {
        return data
      } else {
        return Promise.reject(data)
      }
    }
  },
  error => {
    /* notification['error']({
      message: '提示',
      duration: 2,
      description: '后台报错'
    }) */
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        if (response.success) {
          resolve(response.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
				console.log(response)
        /* if (response.success) {
          resolve(response.data)
        } */
      },
      err => {
        reject(err)
      }
    )
  })
}