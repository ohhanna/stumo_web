import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from './assets/js/axios'
import Notifications from 'vue-notification'
import vueMoment from 'vue-moment'
import store from './store'
import alert from './assets/js/alert'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$dialog = alert
//Vue.prototype.dialog = VuetifyDialog;

Vue.use(Notifications);
Vue.use(vueMoment);
Vue.use(VueCookies);
Vue.$cookies.config("7d", '', '', true);

new Vue({
  vuetify,
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
