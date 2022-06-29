<template>
    <div>
        <Header></Header>
        <div class="content-main  container">
            <Sidebar></Sidebar>
            <div class="pcoded-main-container">
                <div class="pcoded-content">
                    <transition name="fade" mode="out-in">

                        <router-view></router-view>

                    </transition>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script src="./assets/admin-assets/js/plugins/bootstrap.min.js"></script>
<script src="./assets/admin-assets/js/vendor-all.min.js"></script>
<script src="./assets/admin-assets/js/pcoded.min.js"></script>
<script src="./assets/admin-assets/js/menu-setting.min.js"></script> 

<script>
    import Header from '../partials/header.vue';
    import Sidebar from '../partials/sidebar.vue';
    import Footer from '../partials/footer.vue';
    export default {
        components: {
            Header,
            Sidebar,
            Footer
        },
        data(){
            return{}
        }
    }
</script>