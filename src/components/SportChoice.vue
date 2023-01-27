<script>
    import IconCross from './icons/IconCross.vue';
    import { store } from '../stores/counter';
    export default {
        props: {
            nom: String,
            index: Number,
            rep: String,
            temps: String
        },
        emits: ['update:rep','update:temps'],
        data() {
            return {
                store
            }
        },
        components: {
            IconCross
        },
        methods: {
            
        },
    }
</script>

<template>
    <div class="item">
        <IconCross @click="$emit('delete',index)"/>
        <p>{{nom}}-{{index}}</p>
        <div class="rep">
            <p>Rep</p>
            <input type="text" placeholder="10" :value="rep" @input="$emit('update:rep', $event.target.value)">
        </div>
        <div class="temps">
            <p>Temps</p>
            <input type="text" placeholder="2:25" :value="temps" @input="$emit('update:temps', $event.target.value)">
        </div>
    </div>
</template>

<style>
    .item {
        width: 100%;
        background-color: azure;
        border-radius: 10px;
        padding: 1rem 0.5rem 1rem 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .temps, .rep {
        width: fit-content;
    }

    input {
        width: 60px;
    }
</style>