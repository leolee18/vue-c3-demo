import axios from 'axios';
import qs from 'qs';

axios.interceptors.request.use(
  config => {
    if (config.data instanceof FormData) {
      config.headers = {
        'Content-Type': 'multipart/form-data'
      }
    } else {
      config.data = JSON.stringify(config.data);
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    //config.withCredentials = true；
    config.timeout = 5000;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)
axios.interceptors.response.use(
  res => {
    let data = res.data;
    if (res.status === 200) {
      if (data.status == 'success') {
        return data;
      } else {
        return Promise.reject(data);
      }
    } else {
			console.log('接口出问题了');
    }
  },
  error => {		console.log('网络或者地址问题');
    return Promise.reject(error);
  }
)

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params,
				paramsSerializer:params => {
					return qs.stringify(params, { indices: false })
			}})
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      }
		)
  })
}

export function post (url, data = {}) {
	let mData =  qs.stringify(data,{ indices: false });
  return new Promise((resolve, reject) => {
    axios.post(url, mData).then(
      response => {
				resolve(response);
      },
      err => {
        reject(err);
      }
    )
  })
}