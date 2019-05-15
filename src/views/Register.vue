<template>
  <section class="conteiner">
    <h1 class="large text-primary">Sign Up</h1>
    <p class="lead">
      <i class="fas fa-user" />
      Create Your Account
    </p>
    <form class="form">
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
          minlength="4"
        />
      </div>
      <div class="form-group">
        <input type="password" placeholder="Confirm Password" minlength="4" />
      </div>
      <router-link
        @click="createUser()"
        to="/login"
        type="submit"
        value="Register"
        class="btn btn-primary"
        >Register</router-link
      >
    </form>
    <p class="my-1">
      Already have an account?
      <router-link to="/login">Sign In</router-link>
    </p>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  createUser() {
    axios
      .post('http://localhost:3000/register', {
        name: this.name,
        email: this.email,
        password: this.password
      })
      .then(response => {
        response.data
      })
      .catch(e => {
        console.error(e)
      })
  }
}
</script>
