import { JoksTypes, ADD_JOKE, ADD_LOAD } from "./types";
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from '../reducers'


export const addLoading = (payload: boolean) => ({ type: ADD_LOAD, payload })

export const addToState = (jock: JoksTypes) => ({ type: ADD_JOKE, jock })

let click: boolean | undefined
let timerJoke: NodeJS.Timeout 

export const addJoke = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  if (!click ) {
    timerJoke = setInterval(() => {
      fetch('https://api.chucknorris.io/jokes/random')
        .then((res) => res.json())
        .then((data) => {
          dispatch(addToState(data))
          dispatch(addLoading(false))
        })
        .catch(err => {
          console.log("fetchErr", err)
        })
    }, 3000)
    click = true
  } else {
    clearInterval(timerJoke)
    click = false
  }
}
