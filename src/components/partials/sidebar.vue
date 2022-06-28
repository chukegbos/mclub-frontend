<template>
    <nav class="pcoded-navbar menupos-fixed menu-light ">
		<div class="navbar-wrapper content-main  container">
			<div class="navbar-content scroll-div " >
				<ul class="nav pcoded-inner-navbar ">
					<li class="nav-item pcoded-menu-caption">
						<label>Dashboard</label>
					</li>
					<li class="nav-item">
						<a href="/" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-server"></i>
							</span>
							<span class="pcoded-mtext">Home</span>
						</a>
					</li>

					<li class="nav-item pcoded-menu-caption">
						<label>Member Sections</label>
					</li>
					<li class="nav-item pcoded-hasmenu">
						<a href="#!" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-layout"></i>
							</span>
							<span class="pcoded-mtext">Sections</span>
						</a>
						<ul class="pcoded-submenu">
							<li>
								<a href="#">All Section</a>
							</li>
							<li>
								<a href="#">New Section</a>
							</li>
						</ul>
					</li>

				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  components: {

  },
  data(){
	return{}
  }
}
</script>

<style scoped>

</style>
