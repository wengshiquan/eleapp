import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './common/stylus/fonts.styl'
import '../static/css/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
