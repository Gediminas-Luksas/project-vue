<template>
  <section class="conteiner">
    <h1 class="large text-primary">Player and Team</h1>
    <p class="lead">
      <i class="fab fa-playstation" />
      Browse and connect with players
    </p>
    <div v-if="!isLoadin">
      <div v-for="user in users" :key="user.id" class="profiles">
        <div class="profile bg-light">
          <img
            class="round-img"
            src="../assets/scss/img/avatar.jpg"
            alt="Avatar"
          />
          <div>
            <h2>{{ user.firstName }}</h2>
          </div>
        </div>
      </div>
    </div>
    <p v-else>Loading</p>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Player',
  data() {
    return {
      isLoadin: true,
      users: []
    }
  },
  created() {
    axios.get('http://localhost:51515/users').then(({ data }) => {
      this.users = data.users
      this.isLoadin = false
    })
  }
}
</script>
