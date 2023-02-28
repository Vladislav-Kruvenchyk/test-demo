import Vue from 'vue'
import App from './App.vue'
import router from '../config/router'
import store from './store'
import '/lib/css/public/global/styleguide.css'
import '/lib/css/src/styleguide.css'
import Globals from '/lib/js/plugins/globals.plugin'
import VueAxios from "vue-axios";
import axios from "axios";
import VueMask from 'v-mask'
import JwPagination from 'jw-vue-pagination';


Vue.config.productionTip = false
Vue.component('JwPagination', JwPagination);

Vue.use(Globals)
Vue.use(VueAxios, axios)
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
