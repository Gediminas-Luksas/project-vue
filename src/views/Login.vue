<template>
  <section class="conteiner">
    <div class="alert alert-danger">Invalid Credentials</div>

    <h1 class="large text-primary">Sign In</h1>
    <p class="lead">
      <i class="fas fa-user" />
      Sign Into your account
    </p>
    <form class="form">
      <div class="form-group">
        <input type="email" placeholder="Email Address" required />
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" minlength="4" />
      </div>
      <router-link to="/dashboard" class="btn btn-primary" type="submit"
        >Login</router-link
      >
    </form>
    <p class="my-1">
      Don`t have an account?
      <router-link to="/register">Sign Up</router-link>
    </p>
  </section>
</template>

<script>
export default {}
</script>
