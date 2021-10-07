import { JoksTypes, ADD_JOKE,  } from "./types";
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from '../reducers'

export const addToState = (jock: JoksTypes) => ({type: ADD_JOKE, jock})

export const addJoke = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) =>
  fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => res.json())
    .then((data) => 
      dispatch(addToState(data))
    )
    .catch(err=> {
      console.log("fetchErr",err)})