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
                    this.$router.push("/")
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
    <div class="all_input">
        <div class="all_content">
            <p>Login</p>
            <div class="login_input">
                <div class="login">
                    Utilisateur : <input type="text" v-model="user" placeholder="Anthony"/>
                    Mot de passe : <input type="text" v-model="mdp" placeholder="1234"/>
                    <button @click="login">Login</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .all_input{
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .all_content{
        display: flex;
        flex-direction: column;
        gap: 20vh;
        width: 100%;
    }
    .all_content p {
        font-size: 40px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
    .login_input {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login{
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        width: 80%;
        gap: 3vh;
    }

    .login input{
        width: 100%;
        border-radius: 5px;
        background-color: rgb(19,17,17);
        border: grey 1px solid;
        height: 25px;
        color: white;
    }

    .login input:focus {
        border: white;
    }

    .login input::placeholder {
        color: rgba(232,232,232,255);
    }

    .login button{
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