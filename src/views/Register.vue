<template>
  <section class="conteiner">
    <h1 class="large text-primary">Sign Up</h1>
    <p class="lead">
      <i class="fas fa-user" />
      Create Your Account
    </p>
    <form @submit.prevent="register" class="form">
      <div class="form-group">
        <input type="text" v-model="name" placeholder="Name" required />
      </div>
      <div class="form-group">
        <input type="email" v-model="email" placeholder="Email Address" />
        <small class="form-text">Enter your correct email address.</small>
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          minlength="6"
        />
      </div>
      <div class="form-group">
        <input
          v-model="password_confirm"
          type="password"
          placeholder="Confirm Password"
          minlength="6"
        />
      </div>
      <button class="btn btn-primary" to="/login" type="submit" name="button">
        Register
      </button>
      <!-- <router-link
          to="/login"
          type="submit"
          value="Register"
          class="btn btn-primary"
          >Register</router-link
      >-->
    </form>
    <p class="my-1">
      Already have an account?
      <router-link to="/login">Sign In</router-link>
    </p>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
      teamId: ''
    }
  },
  methods: {
    register() {
      const teamId = Math.floor(Math.random() * 10 + 1)
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
          teamId: teamId
        })
        .then(() => {
          this.$router.push({ name: 'login' })
        })
    }
  }
}
</script>
