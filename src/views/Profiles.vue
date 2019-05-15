<template>
  <section class="conteiner">
    <h1 class="large text-primary">Player and Team</h1>
    <p class="lead">
      <i class="fab fa-playstation" />
      Browse and connect with players
    </p>
    <div v-for="profile in profiles" :key="profile._id" class="profiles">
      <div class="profile bg-light">
        <img
          class="round-img"
          src="../assets/scss/img/avatar.jpg"
          alt="Avatar"
        />
        <div v-for="profile in profiles" :key="profile._id">
          <h2>{{ profile.name }}</h2>
          <p>{{ profile.team }}</p>
          <p>Vilnius</p>
          <router-link to="/profile" class="btn btn-primary"
            >View Profile</router-link
          >
        </div>
        <div>
          <img
            class="round-img"
            src="../assets/scss/img/avatar.jpg"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Player',
  computed: {
    ...mapGetters({
      profiles: 'profiles'
    })
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    ...mapActions({
      fetchData: 'loadProfiles'
    })
  }
}
</script>
