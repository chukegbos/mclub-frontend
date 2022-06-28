<template>
    <footer class="footer">
        <div class="container-fluid">
        <nav>
            <ul class="footer-menu">
            <li>
                <router-link :to="{ path: '/home' }"
                ></router-link
                >
            </li>
            </ul>
        </nav>
        <base-admin>
            <template v-slot:company>
                <p class="text-center">&copy; {{new Date().getFullYear()}} SpecsTechAfrica</p>
            </template>
        </base-admin>
            
        </div>
    </footer>
</template>

<script>
import BaseAdmin from '../BaseAdminComponent.vue'
export default {
    components: {
        BaseAdmin
    },
    data() {
        
    },
}
</script>