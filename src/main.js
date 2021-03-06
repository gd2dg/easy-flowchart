import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

let app = new Vue({
  vuetify,
  render: h => h(App)
})
app.$mount('#app')
