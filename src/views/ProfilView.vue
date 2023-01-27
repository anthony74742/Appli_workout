<script>
import { store } from '../stores/counter';
import ListHystory from '../components/ListHystory.vue';
export default {
    data() {
        return {
            store,
            "profilImage": store.Profil.image
        }
    },
    components: {
        ListHystory
    }
}
</script>

<template>
    <main>
        <div class="profil_info">
            <p class="profil">Profil</p>
            <div class="profil_image">
                <img :src="profilImage" alt="">
            </div>
            <div class="text_profil">
                <p>{{ store.Profil.name }}</p>
                <p>{{ store.Profil.description }}</p>
            </div>
        </div>
        <div class="timeline">
            <ListHystory v-for="item in store.History" :item="item"/>
        </div>
    </main>

</template>

<style scoped>
main {
    height: 100%;
}
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
.profil_info {
    height: 40%;
}
.timeline {
    height: 60%;
    overflow-y: scroll;
}
</style>