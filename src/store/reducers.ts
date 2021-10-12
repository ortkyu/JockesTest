import { combineReducers } from 'redux'
import jokeReducer from './Joke/reducer'
import favoriteJocksReducer from './Favorite/reducer'



export const rootReducer = combineReducers({
  jock: jokeReducer,
  favoriteJocks: favoriteJocksReducer
})

export type RootState = ReturnType<typeof rootReducer>
