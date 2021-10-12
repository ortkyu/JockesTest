import { ADD_JOKE, JoksTypesState, FavoriteActionTypes } from "./types";

const initialState: JoksTypesState = {
  jock: null
};

const jokeReducer = (state = initialState, action: FavoriteActionTypes): JoksTypesState => {
  switch (action.type) {
    case ADD_JOKE:
      return { ...state, jock: action.jock };
    default:
      return state;
  }
};

export default jokeReducer;