import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import global from './components/globalComponent'

// const reqireComponent = require.context('./components/txt',false,/\.vue$/)
// console.log(reqireComponent.keys())
// reqireComponent.keys().forEach(fileName => {
//     console.log('____')
//     // console.log(fileName)
// })

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
