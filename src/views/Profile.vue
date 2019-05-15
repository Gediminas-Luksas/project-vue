<template>
  <section class="conteiner">
    <router-link to="/profiles" class="btn">Back To Profiles</router-link>
    <div class="profile-grid my-1">
      <div class="profile-top bg-primary p-2">
        <img
          class="round-img my-1"
          src="../assets/scss/img/avatar.jpg"
          alt="Avatar"
        />

        <h1 class="large">Gediminas Lukšas</h1>
        <p class="lead">Fifa 19 - PS4</p>
        <p>Vilnius</p>
        <div class="icons my-1">
          <a href="#">
            <i class="fas fa-globe fa-2x" />
          </a>
          <a href="#">
            <i class="fab fa-twitter fa-2x" />
          </a>
          <a href="#">
            <i class="fab fa-facebook fa-2x" />
          </a>
          <a href="#">
            <i class="fab fa-github fa-2x" />
          </a>
          <a href="#">
            <i class="fab fa-instagram fa-2x" />
          </a>
        </div>
      </div>

      <div class="profile-about bg-light p-2">
        <h2 class="text-primary">John`a Bio</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          exercitationem quam suscipit dignissimos? Fugit, voluptas accusantium,
          quia dignissimos quisquam quibusdam sapiente illo incidunt numquam
          laboriosam officiis, neque enim nobis quis.
        </p>
        <div class="line" />
        <h2 class="text-primary">Games</h2>
        <div class="skills">
          <div class="p-1"><i class="fas fa-check" /> Fifa 19</div>
          <div class="p-1"><i class="fas fa-check" /> Resident Evil 7</div>
          <div class="p-1"><i class="fas fa-check" /> World of Tanks</div>
          <div class="p-1"><i class="fas fa-check" /> NBA 2K19</div>
        </div>
      </div>

      <div class="profile-exp bg-white p-2">
        <h2 class="text-primary">Experiences</h2>
        <div>
          <h3>Fifa 19</h3>
          <p>Oct 2019 - Current</p>
          <p><strong>Position:</strong> Junior Player</p>
          <p>
            <strong>Destripcion:</strong>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            voluptas placeat alias?
          </p>
        </div>
        <div>
          <h3>World of Tanks</h3>
          <p>Oct 2012 - Current</p>
          <p><strong>Position:</strong> Master Player</p>
          <p>
            <strong>Destripcion:</strong>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            voluptas placeat alias?
          </p>
        </div>
      </div>

      <div class="profile-edu bg-white p-2">
        <h2 class="text-primary">Statistics</h2>
        <div>
          <h3>Fifa World Cup</h3>
          <p><strong>Played Games:</strong> 8</p>
          <p><strong>Wins:</strong> 6</p>
          <div>
            <div class="skill win">80%</div>
          </div>
          <p><strong>Loses:</strong> 2</p>
          <div class="container">
            <div class="skill loses">20%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
