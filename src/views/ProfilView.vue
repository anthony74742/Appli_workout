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
        <img src="https://pbs.twimg.com/profile_images/1311008414156423170/Kxu_7mQS_400x400.jpg" alt="">
        <p>{{ store.Profil.name }}</p>
        <p>{{ store.Profil.description }}</p>
    </main>
</template>