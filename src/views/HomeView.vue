<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <div class="login_link">
      <RouterLink to="/login"><button class="login">Login</button></RouterLink>
    </div>
    <!-- <RouterLink to="/sign-in"><button>Sign-in</button></RouterLink> -->
    <div>
      <p class="bienvenue">
      Bienvenue à toi <br>mon sportif
    </p>
    </div>
    <img src="../assets/Illustration/IllustrationHome.png" alt="">
  </main>
</template>

<style scoped>
  main {
    color: black;
  }

  .bienvenue {
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  .login_link{
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-bottom: 4vh;
  }

  .login{
    font-family: 'Roboto', sans-serif;
        font-weight: 500;
        background-color: rgb(19,17,17);
        border: none;
        border-radius: 5px;
        width: 100px;
        height: 30px;
        font-size: 15px;
        box-shadow:  5px 5px 10px #c5c5c5,
             -5px -5px 10px #fbfbfb;
             color: white;
  }
</style>
