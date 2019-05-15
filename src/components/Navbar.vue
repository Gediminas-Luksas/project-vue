<template>
  <nav class="navbar bg-dark">
    <h1>
      <router-link to="/">
        <i class="fas fa-gamepad" />
        Fifa World Cup
      </router-link>
    </h1>
    <ul>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/profiles">Player</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>
