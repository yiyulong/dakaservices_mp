import { getRequest, postRequest, uploadFile } from '../utils/request'
module.exports.getBanner = (data, config = {}) => getRequest('/static/banner/list', data, config) // 获取首页轮播图列表