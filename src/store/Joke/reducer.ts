import { AddJoke, ADD_JOKE, ADD_LOAD, JoksTypesState, ProductsCardActionTypes } from "./types";

const initialState: JoksTypesState = {
  loading: true,
  jock: undefined
};

const jokeReducer = (state = initialState, action: ProductsCardActionTypes): JoksTypesState => {
  switch (action.type) {
    case ADD_JOKE:
      return { ...state, jock: action.jock };
      case ADD_LOAD:
        return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default jokeReducer;