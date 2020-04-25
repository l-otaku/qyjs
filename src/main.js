// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/index.css';//全局样式
Vue.use(ElementUI);  //引入elementui

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)  //axios
axios.defaults.baseURL = '/api'  //跨域关键代码

import BaiduMap from 'vue-baidu-map'   //Vue Baidu Map 地图框架
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
