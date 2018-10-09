// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $axios from './ulities'
import 'normalize.css/normalize.css'//引入初始化样式
import ElementUI from 'element-ui'//引入element-ui
import 'element-ui/lib/theme-chalk/index.css'//引入样式
import store from './strore/index'
Vue.prototype.$axios = $axios

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
