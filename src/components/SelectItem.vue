<script>
import { store } from '../stores/counter';
export default {
  props: ["name"],
  data() {
    return {
        store
    }
  },
  methods: {

  },
};
</script>

<template>
    <button  @click=" $emit('add', $event.target.dataset.id)">{{ name }}</button>
</template>

<style>
    button {
        width: 80px;
        height: 25px;
        margin: 2px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        background-color: rgb(19,17,17);
        border: none;
        border-radius: 5px;
        font-size: 15px;
        border: 1px solid grey;
        color: rgba(232,232,232,255);
    }
</style>

