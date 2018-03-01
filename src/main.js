// 第三方库 ------------------------------------------------------------------------
import 'modern-normalize'

// 自有库 -------------------------------------------------------------------------
import './styles/customize.styl'

// 项目配置 ------------------------------------------------------------------------
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
