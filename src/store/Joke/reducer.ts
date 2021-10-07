import { AddJoke, ADD_JOKE, JoksTypesState } from "./types";

const initialState: JoksTypesState = {
    jock: undefined
};

const jokeReducer = (state = initialState, action: AddJoke): JoksTypesState  => {
  switch (action.type) {
    case ADD_JOKE:     
      return { ...state, jock: action.jock };

    default:
      return state;
  }
};

export default jokeReducer;