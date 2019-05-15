<template>
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
      <p class="title my-1">{{ post.title }}</p>
      <p class="my-1">{{ post.text }}</p>
      <button class="btn">
        <i class="fas fa-thumbs-up" />
        <span>{{ post.like }}</span>
      </button>
      <button class="btn">
        <i class="fas fa-thumbs-down" />
      </button>
      <router-link
        class="btn btn-primary"
        :to="{ name: 'posts-show', params: { id: post.id } }"
        >Comments - {{ post.comments ? post.comments.length : 0 }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
