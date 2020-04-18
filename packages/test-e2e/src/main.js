import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'

Vue.config.productionTip = false

Vue.use(VueMq)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
