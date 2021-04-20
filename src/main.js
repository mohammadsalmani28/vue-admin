import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './plugins';
import store from './store';
import VueAxiosJwt from 'vue-axios-jwt';
import AxiosJwtHandler from 'vue-axios-jwt';
import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false

Vue.use(VueAxiosJwt);

const axiosJwtHandler = new AxiosJwtHandler({
  refresh_endpoint: `${process.env.VUE_APP_BACKEND_URL ? process.env.VUE_APP_BACKEND_URL : ''}/auth/token/refresh/`,
  transformer: (response) => ({
    accessToken: response.data.access,
    refreshToken: response.data.refresh,
  }),
});

sync(store, router);

new Vue({
  router,
  vuetify,
  store,
  axiosJwtHandler,
  render: h => h(App),
}).$mount('#app');
