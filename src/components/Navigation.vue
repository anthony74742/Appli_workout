<script>
import IconHome from "./icons/IconHome.vue"
import IconStart from "./icons/IconStart.vue"
import IconProfil from "./icons/IconProfil.vue"
import {store} from "../stores/counter.js"
export default {
  data() {
    return {
      store
    }
  },
  components: {
    IconHome,
    IconStart,
    IconProfil
  }
}
</script>
<template>
    <nav>
      <RouterLink to="/"><IconHome/></RouterLink>
      <RouterLink to="/start"><IconStart/></RouterLink>
      <RouterLink to="/profil"><IconProfil/></RouterLink>
    </nav>
</template>

<style>
nav {
  display: flex;
  height: fit-content;
  justify-content: space-evenly;
}

nav a {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>