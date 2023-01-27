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
                buttonName: "next"
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
                        this.buttonEnable = !this.buttonEnable   
                        this.$refs.audio.play()
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
            }
        },
    }
</script>


<template>
    <div>
        <p>{{ store.TimelineExo[indexExo].sport }}</p>
        <p>Nombre de répétition: {{ store.TimelineExo[indexExo].rep }}</p>
        <p>Temps actuel: {{ minutes }}:{{ seconds }}</p>
        <p>Temps à faire: {{ store.TimelineExo[this.indexExo].temps.split(':')[0] }}:{{ store.TimelineExo[this.indexExo].temps.split(':')[1] }}</p>
        <button ref="button" @click="timer" :disabled="buttonEnable">{{ buttonName }}</button>
        <audio ref="audio">
            <source src="../assets/Sound/finish.mp3" type="audio/mpeg">
        </audio>
    </div>
  </template>

<style>

</style>
