<template>
  <section class="landing">
    <div class="dark-overlay">
      <div class="landing-inner">
        <h1 class="x-large">FIFA world cup</h1>
        <p class="lead">
          Create gamer profile, share posts and get help from other players
        </p>
        <div class="buttons">
          <router-link to="/register" class="btn btn-primary"
            >Sign Up</router-link
          >
          <router-link to="/login" class="btn">Login</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WelcomeView'
}
</script>
