import { loadLS } from './../../utils/localStorageCart';
import { ADD_JOKE_TOCART, CartJocks, AddJokeToCart, DELETE_ITEM, DELETE_ALL, ProductsCardActionTypes } from "./types";

const initialState: CartJocks = {
  jockes: loadLS()
};

const cartJocksReducer = (state = initialState, action: ProductsCardActionTypes): CartJocks => {
  switch (action.type) {
    case ADD_JOKE_TOCART: {
      return {
        ...state, jockes: state.jockes.length > 9 ? [...state.jockes, action.payload].slice(1) :
        [...state.jockes, action.payload]
      }
    }
    case DELETE_ITEM: {
      return {
        ...state, jockes: state.jockes.filter(item => item.id !== action.payload)
      }
    }
    case DELETE_ALL: {
      return {
        ...state, jockes: []
      }
    }
    default:
      return state;
  }
};

export default cartJocksReducer;