import { reactive } from "vue";
import user from "../json/user.json"

export const store = reactive({
  SportVal: "",
  Force: ["Squat", "Chaise","Fente", "Saut","Burpees", "Gainage","Crunch","Planche","Dips","Traction"],
  Endurence: ["Ouai", "Oui","Ouai", "Oui","Ouai", "Oui","Ouai", "Oui"],
  TimelineExo: [],
  Users: user.users,
  Favory: [],
  History: []
});

