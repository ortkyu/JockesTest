import { JoksTypes, ADD_JOKE_TOCART, DeleteItemActionType,DELETE_ITEM, AddJokeToCart, DeleteAllType, DELETE_ALL } from "./types";


export const addJokeToCart = (jock: JoksTypes): AddJokeToCart => ({type: ADD_JOKE_TOCART, payload: jock})

export const deleteItemAction = (id: string): DeleteItemActionType => ({type: DELETE_ITEM, payload: id})

export const clearCart = (): DeleteAllType => ({type: DELETE_ALL})
