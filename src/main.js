import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'; 
import 'mint-ui/lib/style.css'

import axios from 'axios';
import moment from 'moment';
axios.defaults.baseURL="http://localhost:3000";
Vue.prototype.axios=axios
Vue.prototype.moment=moment
Vue.use(Mint); 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
