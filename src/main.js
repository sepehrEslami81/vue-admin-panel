import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./plugins/base";
import "./plugins/chartist";
import "./plugins/vee-validate";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import axios from "./plugins/axios";
import "./helper/mixins";
import "./plugins/ckEditor";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
