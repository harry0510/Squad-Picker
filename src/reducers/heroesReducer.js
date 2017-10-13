import { Add_character, Remove_character } from "../actions";
import { createCharacter } from "./helper";

function heroes(state = [],action){
  switch(action.type) {
    case Add_character:
      let character = [...state,createCharacter(action.id)];
      return character;
    case Remove_character:
      let character1 = state.filter(item => item.id !== action.id);
      return character1;
    default:
      return state;
  }
}

export default heroes;
