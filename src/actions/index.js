function addCharacterById(id) {
  const action = {
    type: Add_character,
    id
  }
  return action;
}

function removeCharacterById(id) {
  const action = {
    type: Remove_character,
    id
  }
  return action;
}

export const Add_character = "Add_character";
export const Remove_character = "Remove_character";
export { addCharacterById };
export { removeCharacterById };
