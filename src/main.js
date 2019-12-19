import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'

Vue.config.productionTip = false
// 向vue原型上挂载axios
Vue.prototype.$http = axios
// 配置目标根Url
axios.defaults.baseURL = 'https://www.baidu.com/'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
