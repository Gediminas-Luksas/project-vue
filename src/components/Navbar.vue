<template>
  <nav class="navbar bg-dark">
    <h1>
      <router-link to="/">
        <i class="fas fa-gamepad" />
        Fifa World Cup
      </router-link>
    </h1>
    <ul>
      <router-link v-if="loggedIn" to="/dashboard">Dashboard</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link v-if="loggedIn" to="/users">Player</router-link>
      <router-link v-if="!loggedIn" to="/register">Register</router-link>
      <router-link v-if="!loggedIn" to="/login">Login</router-link>
      <a v-else @click="logout">Logout</a>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['loggedIn'])
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
