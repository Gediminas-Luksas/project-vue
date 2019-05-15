<template>
  <section class="conteiner">
    <h1 class="large text-primary">A meeting room</h1>
    <p class="lead">Players posts, meetings, conversations.</p>
    <div class="post-form">
      <div class="post-form-header bg-primary">
        <h3>Say Something...</h3>
      </div>
      <form class="form my-1">
        <input type="text" v-model="postTitle" placeholder="Title" required />
        <textarea
          cols="30"
          rows="5"
          v-model="postBody"
          placeholder="Create post"
        />
        <input @click="createPosts()" type="Submit" class="btn btn-dark my-1" />
      </form>
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import PostCard from '@/components/PostCard'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    PostCard
  },
  data() {
    return {
      author: '',
      postTitle: '',
      postBody: ''
    }
  },
  computed: {
    ...mapGetters({
      posts: 'posts'
    })
  },
  async created() {
    await this.fetchData()
  },
  // async createPosts() {
  //   await this.createPosts()
  // },
  methods: {
    ...mapActions({
      fetchData: 'loadPosts',
      createPosts: 'createPosts'
    }),
    createPosts() {
      axios
        .post('http://localhost:3000/posts', {
          title: this.postTitle,
          text: this.postBody,
          author: 'Admin',
          comments: []
        })
        .then(response => {
          response.data
        })
        .catch(e => {
          console.error(e)
        })
    }
  }
}
</script>
