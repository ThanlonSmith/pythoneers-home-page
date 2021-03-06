import Vue from 'vue'
import App from './App.vue'
import Axios from "axios"
import ElementUI from 'element-ui'

// Axios.defaults.baseURL = 'http://127.0.0.1:8000/v1/'
Axios.defaults.baseURL = 'https://api.pythoneers.cn/v1/'

Vue.prototype.$http = Axios
Vue.config.productionTip = false // 生产环境不需要控制台有提示
Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
