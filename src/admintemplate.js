// asset imports

//important css assets
import "./assets/admin-assets/plugins/vendors/morrisjs/morris.css";
import "./assets/admin-assets/plugins/vendors/c3-master/c3.min.css";
import "./assets/admin-assets/css/style.css";


//important js assets
// import "./assets/admin-assets/js/plugins/bootstrap.min.js";
// import "./assets/admin-assets/js/vendor-all.min.js";
// import "./assets/admin-assets/js/pcoded.min.js";
// import "./assets/admin-assets/js/menu-setting.min.js";

//optional js assets imports if needed


// import the global component that will render all these imported assets
import BaseAdmin from "./components/BaseAdminComponent.vue";


const GlobalAdminBase = {
    install(Vue) {
        Vue.component(BaseAdmin.name, BaseAdmin);
    },
}

export default {
    install(Vue) {
      Vue.use(GlobalAdminBase);
    },
  };




