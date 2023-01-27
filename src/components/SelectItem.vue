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
        width: 90px;
        height: 25px;
    }
</style>

