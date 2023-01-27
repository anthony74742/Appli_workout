<script>
import { store } from '../stores/counter';
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        Time() {
            let sec = 20
            let interval = setInterval(()=>sec--, 1000)
            if (sec>0) {
                interval
            } else {
                clearInterval(interval)
            }
            return sec
        }
    },
}
</script>

<template>
    <div>
        <p></p>
    </div>
</template>