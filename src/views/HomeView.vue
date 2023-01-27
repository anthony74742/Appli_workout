<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <RouterLink to="/login"><button>Login</button></RouterLink>
    <RouterLink to="/sign-in"><button>Sign-in</button></RouterLink>
    <div>
      <p class="bienvenue">
      Bonjour à toi <br>mon sportif
    </p>
    </div>
    <img src="../assets/Illustration/IllustrationHome.png" alt="">
  </main>
</template>

<style>
  main {
    color: black;
  }

  .bienvenue {
    font-size: 40px;
  }

  img {
    width: 100%;
    object-fit: contain;
  }
</style>
