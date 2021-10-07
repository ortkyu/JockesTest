import { loadLS } from './../../utils/localStorageCart';
import { ADD_JOKE_TOCART, CartJocks, AddJokeToCart, DELETE_ITEM, ProductsCardActionTypes } from "./types";

const initialState: CartJocks = {
  jockes: loadLS()
};

const cartJocksReducer = (state = initialState, action: ProductsCardActionTypes): CartJocks => {
  switch (action.type) {
    case ADD_JOKE_TOCART: {
      return {
        ...state, jockes: [...state.jockes, action.payload]
      }
    }
    case DELETE_ITEM: {
      return {
        ...state, jockes: state.jockes.filter(item => item.id !== action.payload)
      }
    }
    default:
      return state;
  }
};

export default cartJocksReducer;