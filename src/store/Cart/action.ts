import { JoksTypes, ADD_JOKE_TOCART, DeleteItemActionType,DELETE_ITEM, AddJokeToCart } from "./types";


export const addJokeToCart = (jock: JoksTypes): AddJokeToCart => ({type: ADD_JOKE_TOCART, payload: jock})

export const deleteItemAction = (id: string): DeleteItemActionType => ({type: DELETE_ITEM, payload: id})
