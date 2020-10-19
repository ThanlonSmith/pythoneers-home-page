import Vue from 'vue'
import App from './App.vue'
import Axios from "axios"

Axios.defaults.baseURL = 'http://127.0.0.1:8000/v1/api/'
Vue.prototype.$http = Axios
Vue.config.productionTip = false // 生产环境不需要控制台有提示
new Vue({
  el: '#app',
  render: h => h(App)
})
