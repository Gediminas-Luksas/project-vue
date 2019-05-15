<template>
  <section class="conteiner">
    <router-link to="/posts" class="btn">Back To Posts</router-link>

    <div class="post bg-white my-1 p-1 shadow">
      <div>
        <router-link to="/profile">
          <img
            class="round-img my-1"
            src="../assets/scss/img/avatar.jpg"
            alt="Avatar"
          />
        </router-link>
        <h4>{{ post.author }}</h4>
      </div>
      <div>
        <h3 class="title">{{ post.title }}</h3>
        <p class="my-1">{{ post.text }}</p>
      </div>
    </div>
    <div class="post-form">
      <div class="post-form-header bg-primary">
        <h3>Leave A Comment</h3>
      </div>
      <form class="form my-1">
        <textarea
          cols="30"
          rows="5"
          value="Submit"
          v-model="postBody"
          placeholder="Comment on this post"
        />
        <input
          @click="createPost(post.id)"
          type="submit"
          class="btn btn-dark my-1"
        />
      </form>
    </div>

    <div
      v-for="comment in post.comments"
      :key="comment.id"
      class="post bg-white my-1 p-1 shadow"
    >
      <div>
        <router-link to="/profile">
          <img
            class="round-img my-1"
            src="../assets/scss/img/avatar.jpg"
            alt="Avatar"
          />
        </router-link>
        <h4>{{ comment.author }}</h4>
      </div>

      <div>
        <p class="my-1">{{ comment.text }}</p>
        <button class="btn">
          <i class="fas fa-thumbs-up" />
          <span>2</span>
        </button>
        <button class="btn">
          <i class="fas fa-thumbs-down" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      postBody: ''
    }
  },
  computed: {
    ...mapGetters({
      post: 'post'
    })
  },
  async created() {
    await this.fetchData(this.id)
  },
  methods: {
    ...mapActions({
      fetchData: 'loadPostsById'
    }),
    createPost(id) {
      axios
        .patch('http://localhost:3000/posts/' + id, {
          comments: [
            ...this.post.comments,
            {
              author: 'Tedy',
              text: this.postBody
            }
          ]
        })
        .then(response => {
          console.log(response.data)
        })
        .catch(e => {
          console.error(e)
        })
    }
  }
}
</script>
