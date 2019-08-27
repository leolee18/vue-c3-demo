import axios from 'axios';
import qs from 'qs';

//默认值
axios.defaults.baseURL = 'http://51coach.com/wwlyweb/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 2500;
//请求拦截器
axios.interceptors.request.use(
	config => {
		/* const xToken = '12344';
		if (xToken !== null) {
		  config.headers['X-Token'] = xToken
		} */
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
		// config.withCredentials = true;
		return config;
	},
	error => {
		return Promise.reject(error);
	}
)
//响应拦截器
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
	error => {
		console.log('网络或者地址问题');
		return Promise.reject(error);
	}
)

export function get(url, params = {}) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
				params: params,
				paramsSerializer: params => {
					return qs.stringify(params, {
						indices: false
					})
				}
			})
			.then(response => {
				resolve(response);
			})
			.catch(err => {
				reject(err);
			})
	})
}

export function post(url, params = {}) {
	params = qs.stringify(params, {
		indices: false
	});
	return new Promise((resolve, reject) => {
		axios.post(url, params).then(
			response => {
				resolve(response);
			},
			err => {
				reject(err);
			}
		)
	})
}

export function dele(url, params = {}) {
	return new Promise((resolve, reject) => {
		axios.delete(url, {
		     params: params,
		    paramsSerializer: params => {
		      return qs.stringify(params, { indices: false })
		    }})
			.then(response => {
				resolve(response);
			})
			.catch(err => {
				reject(err);
			})
	})
}

export function put(url, params = {}) {
	params = qs.stringify(params, {
		indices: false
	});
	return new Promise((resolve, reject) => {
		axios.put(url, params).then(
			response => {
				resolve(response);
			},
			err => {
				reject(err);
			}
		)
	})
}
