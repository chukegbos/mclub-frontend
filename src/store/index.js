import Vue from "vue";
import Vuex from "vuex";

import AdminAuth from "./modules/AdminStoreState/authStore";
import UserAuth from "./modules/UserStoreState/authStore";

/*eslint-disable*/
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AdminAuth,
    UserAuth,
  },
  
});
