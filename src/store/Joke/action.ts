import {  AppThunk } from './../index';
import { ADD_JOKE } from "./types";
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

export const addJokeInterval = (stopInterval?: boolean): AppThunk => (dispatch) => {
  stopInterval && (click = stopInterval)
  if (!click ) {
    timerJoke = setInterval(() => requestJoke(dispatch) , 3000)
    click = true
  } else {
    clearInterval(timerJoke)
    click = false
  }
}

export const addJoke = (): AppThunk => (dispatch) => {
  requestJoke(dispatch)
}