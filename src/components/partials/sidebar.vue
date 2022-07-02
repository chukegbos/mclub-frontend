<template>
	<nav class="pcoded-navbar menupos-fixed">
		<div class="navbar-wrapper">
			<div class="navbar-content scroll-div">
				<ul class="nav pcoded-inner-navbar">
					<li class="nav-item pcoded-menu-caption">
						<label>Membership</label>
					</li>
					<li class="nav-item">
						<a href="/" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-server"></i>
							</span>
							<span class="pcoded-mtext">Dashboard</span>
						</a>
					</li>

					<li class="nav-item">
						<a href="/" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-user"></i>
							</span>
							<span class="pcoded-mtext">Members</span>
						</a>
					</li>
					<li class="nav-item">
						<a href="/member-section" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-box"></i>
							</span>
							<span class="pcoded-mtext">Member Sections</span>
						</a>
					</li>

					<li class="nav-item">
						<a href="/member-types" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-layers"></i>
							</span>
							<span class="pcoded-mtext">Member Types</span>
						</a>
					</li>
					<li class="nav-item pcoded-hasmenu">
						<a href="#!" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-layout"></i>
							</span>
							<span class="pcoded-mtext">Payments</span>
						</a>
						<ul class="pcoded-submenu">
							<li>
								<a href="#">Payment Products</a>
							</li>
							<li>
								<a href="#">Payment Debits</a>
							</li>
							<li>
								<a href="#">Payment History</a>
							</li>
						</ul>
					</li>
					

					<li class="nav-item pcoded-menu-caption">

						<label>Inventory</label><span class="pcoded-badge badge badge-danger">Coming soon</span>
					</li>
					<li class="nav-item pcoded-menu-caption">

						<label>Bar</label><span class="pcoded-badge badge badge-danger">Coming soon</span>
					</li>
					<li class="nav-item pcoded-menu-caption">
						<label>Kitchen</label><span class="pcoded-badge badge badge-danger">Coming soon</span>
					</li>

					<li class="nav-item pcoded-menu-caption">
						<label>Settings</label>
					</li>
					<li class="nav-item">
						<a href="/" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-server"></i>
							</span>
							<span class="pcoded-mtext">Admin</span>
						</a>
					</li>

					<li class="nav-item">
						<a href="/" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-server"></i>
							</span>
							<span class="pcoded-mtext">Configure Application</span>
						</a>
					</li>

					<li class="nav-item">
						<a href="/" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-server"></i>
							</span>
							<span class="pcoded-mtext">Profile</span>
						</a>
					</li>

					<li class="nav-item">
						<a href="/logout" class="nav-link ">
							<span class="pcoded-micon">
								<i class="feather icon-server"></i>
							</span>
							<span class="pcoded-mtext">Logout</span>
						</a>
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
