import { ADD_JOKE, JoksTypesState, ProductsCardActionTypes } from "./types";

const initialState: JoksTypesState = {
  jock: null
};

const jokeReducer = (state = initialState, action: ProductsCardActionTypes): JoksTypesState => {
  switch (action.type) {
    case ADD_JOKE:
      return { ...state, jock: action.jock };
    default:
      return state;
  }
};

export default jokeReducer;