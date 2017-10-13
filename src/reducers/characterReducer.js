import characters_json from '../data/characters.json';
import { Add_character, Remove_character } from "../actions";
import { createCharacter } from "./helper";

function characters(state = characters_json,action) {
  switch(action.type) {
    case Add_character:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    case Remove_character:
      let characters1 = [...state,createCharacter(action.id)];
      return characters1;
    default:
      return state;
  }
}

export default characters;
