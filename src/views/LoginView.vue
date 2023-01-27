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
        login() {
            let userExist = store.Users.find(a=>a.user == this.user)
            console.log(userExist)
            if (userExist != undefined) {
                if (userExist.mdp == this.mdp) {
                    console.log('log')
                    store.UserName = userExist.user
                    store.Profil = userExist.profil
                    store.IsLog = true
                    for (let i=0; i<userExist.favory.length; i++){
                        store.Favory.push(userExist.favory[i])
                    }
                    for (let i=0; i<userExist.history.length; i++){
                        store.History.push(userExist.history[i])
                    }
                    console.log(store.History)
                    this.$router.go(-1)
                } else {
                    console.log("Mdp false")
                }
            } else {
                console.log("User don't exist")
            }
        },
    },
}
</script>

<template>
    <p>Login</p>
    <div>
        <div class="login">
            Utilisateur : <input type="text" v-model="user"/>
            Mot de passe : <input type="text" v-model="mdp"/>
            <button @click="login">Login</button>
        </div>
    </div>

</template>

<style>
    div {
        display: flex;
        flex-direction: column;

    }
</style>