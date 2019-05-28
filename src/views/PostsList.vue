<template>
  <section class="conteiner">
    <h1 class="large text-primary">A meeting room</h1>
    <p class="lead">Players posts, meetings, conversations.</p>
    <div class="post-form">
      <div class="post-form-header bg-primary">
        <h3>Say Something...</h3>
      </div>
      <form @submit.prevent="createPost" class="form my-1">
        <input type="text" v-model="title" placeholder="Title" required />
        <textarea cols="30" rows="5" v-model="body" placeholder="Create post" />
        <div class="form-group">
          <label for="author">Author</label>
          <input
            type="text"
            v-model="author"
            name="author"
            class="form-control"
          />
        </div>
        <input type="Submit" class="btn btn-dark my-1" />
      </form>
      <PostCard v-for="post in posts" :key="post._id" :post="post" />
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
import PostCard from '@/components/PostCard'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['id'],
  components: {
    PostCard
  },
  data() {
    return {
      title: '',
      body: '',
      author: '',
      date_posted: ''
    }
  },
  computed: {
    ...mapGetters({
      posts: 'posts'
    })
  },
  async created() {
    await this.fetchData(),
      (this.date_posted = new Date().toLocaleDateString('lt-LT'))
  },
  methods: {
    ...mapActions({
      fetchData: 'loadPosts'
    }),
    createPost() {
      this.$store
        .dispatch('createPosts', {
          title: this.title,
          body: this.body,
          author: this.author,
          date_posted: this.date_posted,
          comments: []
        })
        .then(() => {
          this.$router.push({ name: 'posts-show' })
        })
    }
  }
}
</script>
