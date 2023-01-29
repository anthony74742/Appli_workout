import { reactive } from "vue";
import user from "../json/user.json"

export const store = reactive({
  SportVal: "",
  Force: ["Squat", "Chaise","Fente", "Saut","Burpees", "Gainage","Crunch","Planche","Dips","Traction"],
  Endurence: ["Marche", "Running","Cyclisme", "Natation"],
  TimelineExo: [],
  Users: user.users,
  UserName: "",
  Favory: [],
  History: [],
  Profil: "",
  IsLog: false
});

