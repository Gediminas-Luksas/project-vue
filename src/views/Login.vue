<template>
  <section class="conteiner">
    <div class="alert alert-danger">Invalid Credentials</div>

    <h1 class="large text-primary">Sign In</h1>
    <p class="lead">
      <i class="fas fa-user" />
      Sign Into your account
    </p>
    <form @submit.prevent="login" class="form">
      <div class="form-group">
        <input
          v-model="email"
          type="email"
          placeholder="Email Address"
          required
        />
      </div>
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          minlength="4"
        />
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
    <p class="my-1">
      Don`t have an account?
      <router-link to="/register">Sign Up</router-link>
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'users' })
        })
    }
  }
}
</script>
