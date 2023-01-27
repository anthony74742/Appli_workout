<script>
import { store } from '../stores/counter';
export default {
    data() {
        return {
            store,
            "profilImage": store.Profil.image
        }
    },
}
</script>

<template>
    <main>
        <p class="profil">Profil</p>
        <div class="profil_image">
            <img :src="profilImage" alt="">
        </div>
        <div class="text_profil">
            <p>{{ store.Profil.name }}</p>
            <p>{{ store.Profil.description }}</p>
        </div>
    </main>
</template>

<style scope>
.profil {
    font-size: 30px;
}
.profil_image {
    width: 100px;
    border-radius: 50px;
}
.text_profil {
    font-weight: bold;
}
</style>