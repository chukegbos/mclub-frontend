<template>
  <!-- <div class="card"> -->
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <h2 class="heading-section text-primary mb-2">Mclub System</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="wrap">
            <div class="login-wrap p-4 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Sign In</h3>
                </div>
                <div class="w-100">
                  <p class="social-media d-flex justify-content-end">
                    <a
                      href="#"
                      class="social-icon d-flex align-items-center justify-content-center"
                      ><span class="fa fa-facebook"></span
                    ></a>
                    <a
                      href="#"
                      class="social-icon d-flex align-items-center justify-content-center"
                      ><span class="fa fa-twitter"></span
                    ></a>
                  </p>
                </div>
              </div>
              <form @submit.prevent="submitDetails" class="signin-form">
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="form.username"
                  />
                  <label class="form-control-placeholder" for="username"
                    >Username</label
                  >
                </div>
                <div class="form-group">
                  <input
                    v-model="form.password"
                    id="password-field"
                    type="password"
                    class="form-control"
                    required
                  />
                  <label class="form-control-placeholder" for="password"
                    >Password</label
                  >
                  <span
                    toggle="#password-field"
                    class="fa fa-fw fa-eye field-icon toggle-password"
                  ></span>
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control btn btn-primary rounded submit px-3">
                    Sign In
                  </button>
                </div>
                <div class="form-group d-md-flex">
                  <div class="w-50 text-left">
                    <label class="checkbox-wrap checkbox-primary mb-0"
                      >Remember Me
                      <input type="checkbox" checked />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="w-50 text-md-right">
                    <a href="#">Forgot Password</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- </div> -->
</template>

<script>
/*eslint-disable*/
export default {
  name: "Login",
  data() {
    return {
      form: {
          username: "",
          password: "",
        },
    };
  },
  created() {
    localStorage.removeItem("loginDetails");
  },
  computed: {},
  beforeMount() {},
  methods: {
    submitDetails() {
      this.$store
      .dispatch("UserAuth/LOGIN", { query: this.form })
      .then((resp) => {
        
        if (resp) {
          console.log(this.form)
          btToast.fire({
            icon: "success",
            title: "Login Successful",
          });
          this.$router.push({
            name: "Home",
          });
        }
        else {
          this.$swal("Opss", "Username or password incorrect, try again!!!", "error");
        }
      })
      .catch((err) => {
      
        this.$swal("Opss", "An Error Encounted", "error");
      });
    },
  },
};
</script>

<style src="./login.scss" lang="scss" />
