<template>
  <section class="conteiner">
    <h1 class="large text-primary">Dashboard</h1>
    <p class="lead"><i class="fas fa-user" /> Gediminas Lukšas</p>
    <div class="dash-button">
      <a href="create-profile.html" class="btn">
        <i class="fas fa-user-circle text-primary" /> Edit Profile
      </a>
      <a href="create-profile.html" class="btn">
        <i class="fab fa-black-tie text-primary" /> Add Experience
      </a>
      <a href="create-profile.html" class="btn">
        <i class="fas fa-graduation-cap text-primary" /> Add Aducation
      </a>
    </div>

    <h2 class="my-2">Experience Credentials</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Games</th>
          <th class="hige-sm">Experience</th>
          <th class="hide-sm">Years</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fifa 19</td>
          <td class="hide-sm">Junior Player</td>
          <td class="hide-sm">Oct 2019 - Current</td>
          <td>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <td>World of Tanks</td>
          <td class="hide-sm">Master Player</td>
          <td class="hide-sm">Oct 2012 - Current</td>
          <td>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="my-2">Statistics</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Tournament</th>
          <th class="hige-sm">Degree</th>
          <th class="hide-sm">Years</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fifa World Cup</td>
          <td class="hide-sm">Played Games</td>
          <td class="hide-sm">Oct 2018 - May 2019</td>
          <td>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="my-2">
      <button class="btn btn-danger">
        <i class="fas fa-user-minus" />
        Delete My Account
      </button>
    </div>
  </section>
</template>

<script>
export default {}
</script>
