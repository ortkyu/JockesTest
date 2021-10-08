import { ADD_JOKE } from "./types";
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from '../reducers'
import { JoksTypes } from "../../Interfaces";

export const addToState = (jock: JoksTypes) => ({ type: ADD_JOKE, jock })

let click: boolean | undefined
let timerJoke: NodeJS.Timeout 

const requestJoke = (dispatch: any) => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        dispatch(addToState(data))
      })
      .catch(err => {
        console.log("fetchErr", err)
      })
}

export const addJokeInterval = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  if (!click ) {
    timerJoke = setInterval(() => requestJoke(dispatch) , 3000)
    click = true
  } else {
    clearInterval(timerJoke)
    click = false
  }
}

export const addJoke = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  requestJoke(dispatch)
}