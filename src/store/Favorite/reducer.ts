import { loadLS } from '../../utils/localStorageCart';
import { ADD_JOKE_TO_FAVORITE, favoriteJocksState, DELETE_ITEM, DELETE_ALL, FavoriteActionTypes } from "./types";

const initialState: favoriteJocksState = {
  jockes: loadLS()
};

const favoriteJocksReducer = (state = initialState, action: FavoriteActionTypes): favoriteJocksState => {
  switch (action.type) {
    case ADD_JOKE_TO_FAVORITE: {
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

export default favoriteJocksReducer;