<script>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue"
import {store} from "./stores/counter.js"

export default {
  data() {
    return {
      store
    }
  },
  components: {
    Navigation
  },
  mounted() {
    
  },
}
</script>

<template>
  <header>
    <RouterView />
  </header>
  <footer>
    <Navigation/>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  height: 80vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    margin-top: 1rem;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
