import { combineReducers } from 'redux'
import jokeReducer from './Joke/reducer'
import cartJocksReducer from './Cart/reducer'



export const rootReducer = combineReducers({
  jock: jokeReducer,
  cartJocks: cartJocksReducer
})

export type RootState = ReturnType<typeof rootReducer>
