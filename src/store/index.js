import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
// import axios from "./plugins/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  auth,
});
