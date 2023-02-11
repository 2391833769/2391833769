import axios from "axios";

import { BASE_URL, TIME_OUT } from "./config";

class httpRequest {
  constructor(baseUrl, timeOut) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: timeOut
    });

    //响应拦截器
    this.instance.interceptors.response.use(res => {
      return res.data.data
    });
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: 'get'});
  }

  post(config) {
    return this.request({ ...config, method: 'post'});
  }
}

export default new httpRequest(BASE_URL, TIME_OUT);