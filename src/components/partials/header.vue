<template>
    <div>
        <header class="navbar pcoded-header navbar-expand-lg navbar-light headerpos-fixed">
            <div class="content-main  container">
                <div class="m-header">
                    <a class="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
                    <a href="/" class="b-brand">
                        <!-- ========   change your logo hear   ============ -->
                        <!-- <img src="assets/images/logo-dark.png" alt="" class="logo"> -->
                        <h3>MCLUB</h3>
                    </a>
                    <a href="#!" class="mob-toggler">
                        <i class="feather icon-more-vertical"></i>
                    </a>
                </div>
                <navbar />
            </div>
	    </header>
    </div>
</template>

<script>
import navbar from './navbar.vue';

export default {
    components: {
        navbar
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>