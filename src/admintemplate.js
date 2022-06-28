// asset imports

//important css assets
import "./assets/admin-assets/plugins/vendors/morrisjs/morris.css";
import "./assets/admin-assets/plugins/vendors/c3-master/c3.min.css";
import "./assets/admin-assets/css/style.css";


//important js assets
import "./assets/admin-assets/js/plugins/bootstrap.min.js";
import "./assets/admin-assets/js/vendor-all.min.js";
import "./assets/admin-assets/js/pcoded.min.js";
import "./assets/admin-assets/js/menu-setting.min.js";

//optional js assets imports if needed

//Apex chart
// import "./assets/admin-assets/js/plugins/apexcharts.min.js";
//peity chart js 
// import "./assets/admin-assets/js/plugins/jquery.peity.min.js";
// import "./assets/admin-assets/js/plugins/jquery.knob.min.js";
// import "./assets/admin-assets/js/pages/jquery.knob-custom.min.js";

//c3js charts
// import "./assets/admin-assets/plugins/vendors/d3/d3.min.js";
// import "./assets/admin-assets/plugins/vendors/c3-master/c3.min.js";

//sparkle js
import "./assets/admin-assets/plugins/vendors/sparkline/jquery.sparkline.min.js";

//morris js
import "./assets/admin-assets/plugins/vendors/raphael/raphael-min.js";
import "./assets/admin-assets/plugins/vendors/morrisjs/morris.js";

//custom chart js
import "./assets/admin-assets/js/pages/dashboard-server.js";

// import the global component that will render all these imported assets
import BaseAdmin from "./components/BaseDropdown.vue";


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




