<script>
import { store } from '../stores/counter';
export default {
    props: ["item"],
    data() {
        return {
            store,
            sport: "",
            date: "",
            temps: ""
        }
    },
    mounted() {
        if (store.IsLog) {
            
            let sportTab = []
            let minute = 0
            let second = 0
            for (let i = 0; i<this.item.length; i++){   
                this.date = this.item[i].date
                sportTab.push(this.item[i].sport)
                minute = minute + Number(this.item[i].temps.split(':')[0])
                second = second + Number(this.item[i].temps.split(':')[1])
            }
            this.temps = `${minute}:${second}`
            this.sport = sportTab.join(', ')


            
        }
    },
}
</script>

<template>
    <div class="history">
        <div>
            <p>Séance du : {{ date }}</p>
            <p>Sport pratiqué : {{ sport }}</p>
        </div>
        <p>Durée de la séance : {{ temps }}</p>
    </div>
</template>

<style scoped>
.history{
    margin-bottom: 1rem;
}
</style>