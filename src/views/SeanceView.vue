<script>
    import { store } from '../stores/counter';
    export default {
        data() {
            return {
                store,
                minutes: 0,
                seconds: 0,
                intervalId: null,
                buttonEnable: false,
                indexExo: 0,
                buttonName: "next",
                finish: false,
                date: new Date()
            }
        },
        methods: {
            timer() {
                this.buttonEnable = !this.buttonEnable
                let limitMinutes = store.TimelineExo[this.indexExo].temps.split(':')[0]
                let limitSeconds = store.TimelineExo[this.indexExo].temps.split(':')[1]
                this.intervalId = setInterval(() => {
                    if (this.seconds === 59) {
                        this.seconds = 0
                        this.minutes++
                    } else if (this.seconds == limitSeconds && this.minutes == limitMinutes) {
                        clearInterval(this.intervalId) 
                        this.$refs.audio.play()
                        this.buttonEnable = !this.buttonEnable  
                            if (this.indexExo<store.TimelineExo.length-1){
                                setTimeout(()=>{
                                this.minutes = 0
                                this.seconds = 0
                                this.indexExo = this.indexExo + 1
                                console.log(this.indexExo)
                                },4000)
                            } else {
                                this.buttonName = "finish"
                            }
                    } else {
                        this.seconds++
                    }
                }, 1000)
            },
            finishButton() {
                this.finish = !this.finish
            },
            pushHistory() {
                store.History.push(store.TimelineExo)
                console.log(store.History)
            }
        },
    }
</script>


<template>
    <div class="all_stat">
        <div class="stat_placement">
            <p class="sport">{{ store.TimelineExo[indexExo].sport }}</p>
            <p>Répétition : {{ store.TimelineExo[indexExo].rep }}</p>
            <p>Temps : {{ minutes }}:{{ seconds }} / {{ store.TimelineExo[this.indexExo].temps.split(':')[0] }}:{{ store.TimelineExo[this.indexExo].temps.split(':')[1] }}</p>
            <button v-if="buttonName == 'next'" ref="button" @click="timer" :disabled="buttonEnable">next</button>
            <button v-else ref="button" @click="finishButton" :disabled="buttonEnable">finish</button>
            <audio ref="audio">
                <source src="../assets/Sound/finish.mp3" type="audio/mpeg">
            </audio>
        </div>
    </div>
    <div class="complete" v-show="finish">
        <p>Vous avez terminer. Avez vous aimez cette séance ?</p>
        <div class="button">
            <RouterLink to="/"><button @click="pushHistory">No</button></RouterLink>
            <RouterLink to="/"><button @click="pushHistory">Yes</button></RouterLink>
        </div>
    </div>
  </template>

<style>
    .complete {
        position: absolute;
        top: 25%;
        left: 1vw;
        width: 100%;
        height: 50vh;
        background-color:rgb(205, 207, 206);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 20px;
    }
    .button {
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .all_stat {
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .stat_placement {
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .sport{
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20vh;
    }
</style>
