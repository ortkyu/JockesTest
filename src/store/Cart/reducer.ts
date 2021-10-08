import { loadLS } from './../../utils/localStorageCart';
import { ADD_JOKE_TOCART, CartJocksState, DELETE_ITEM, DELETE_ALL, ProductsCardActionTypes } from "./types";

const initialState: CartJocksState = {
  jockes: loadLS()
};

const cartJocksReducer = (state = initialState, action: ProductsCardActionTypes): CartJocksState => {
  switch (action.type) {
    case ADD_JOKE_TOCART: {
      return {
        ...state, jockes: state.jockes.length > 9
          ? [...state.jockes, action.payload].slice(1)
          : [...state.jockes, action.payload]
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