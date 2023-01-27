<script>
import { store } from '../stores/counter';
export default {
    data() {
        return {
            store,
            user:"",
            mdp:""
        }
    },
    methods: {
        
    },
}
</script>

<template>
    <p>Sign-in</p>
    <div>
        <div class="login">
            Utilisateur : <input type="text" v-model="user"/>
            Mot de passe : <input type="text" v-model="mdp"/>
            <button @click="sign">sign-in</button>
        </div>
    </div>

</template>

<style>
    div {
        display: flex;
        flex-direction: column;

    }
</style>