<script>
import {store} from "../stores/counter.js"
import IconBackArrow from "../components/icons/IconBackArrow.vue";
import IconHome from "../components/icons/IconHome.vue";
import SelectItem from "../components/SelectItem.vue";
import SportChoice from "../components/SportChoice.vue";
export default {
  data() {
      return {
          store,
          ListExercice: [],
          TypeSport: ["Force", "Endurence"],
          List: [],
          obj: {
            id: null,
            sport: "",
            rep: null,
            temps: null,
            date: null
          }
      };
  },
  methods: {
    getNow() {
      let date = new Date()
      let jour = date.getDate()
      let mois = date.getMonth() + 1
      let dateNow = `${jour}/${mois}`
      return dateNow
    },
    addObj(sport) {

      this.ListExercice.push({ ...this.obj, sport, id: this.ListExercice.length, date: this.getNow()})
      console.log(this.ListExercice)
    },
    log(e) {
      console.log(e)
    },
    removeFromList(e) {
      console.log(e)
      this.ListExercice.splice( e,2)
    },
    SelectValue(e) {
      store.SportVal = e.target.value
    },
    CheckVal() {
      if (store.SportVal == 'Force'){
        return store.Force
      } else if (store.SportVal == 'Endurence'){
        return store.Endurence
      } else {
        return
      }
    },
    pushStore() {
      for (let i=0; i<this.ListExercice.length; i++){
        console.log(this.ListExercice[i])
        store.TimelineExo.push(this.ListExercice[i])
        store.TimelineExo.push({...this.obj, sport:"Repo", id: this.ListExercice.length,  date:this.getNow(),rep:1, temps: "0:05"})
      }
      console.log(store.TimelineExo)
    }
  },
  components: { IconHome, IconBackArrow, SelectItem, SportChoice },
  unmounted() {
    store.SportVal = "",
    store.ListExercice = []
  },
}
</script>

<template>
  <div class="about">
    <RouterLink to="/"><IconBackArrow/></RouterLink>
    <select name="Sport" id="" @change="SelectValue($event)">
      <option value="" selected>S??lection?? votre sport</option>
      <option v-for="item in TypeSport" :value = item>{{ item }}</option>
    </select>
    <div class="choix">
      <SelectItem v-for="item in CheckVal()" :name = "item" v-bind:data-id="item" @add="addObj"/>
    </div>
    <div class="ListChoice" ref="ListChoice">
      <SportChoice v-for="(items, index) in ListExercice" :nom = "items.sport" :index = 'index' v-model:rep = "items.rep" v-model:temps = "items.temps" @delete="removeFromList" />
    </div>
    <div class="confirm">
      <RouterLink to="/seance" @click="pushStore"><button>Confirm</button></RouterLink>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.about select {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  background-color: rgb(19,17,17);
  color: white;
  border: none;
  border-radius: 5px;
  width: 80%;
  height: 30px;
  font-size: 15px;

}

.choix {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  height: 10vh;
  align-content: flex-start;
  overflow-y: scroll;
}

.ListChoice{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 58vh;
  overflow-y: scroll;
}

.confirm button {
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

@media (min-width: 1024px) {
  .about {
    min-height: 100%;
    display: flex;
    align-items: center;
  }
}

div {
    color: black;
  }
</style>
