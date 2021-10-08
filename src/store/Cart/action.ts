import { JoksTypes } from "../../Interfaces";
import { ADD_JOKE_TOCART, DeleteItemActionType, DELETE_ITEM, AddJokeToCart, DeleteAllType, DELETE_ALL } from "./types";


export const addJokeToCart = (jock: JoksTypes): AddJokeToCart => ({ type: ADD_JOKE_TOCART, payload: jock })

export const deleteItemAction = (id: string): DeleteItemActionType => ({ type: DELETE_ITEM, payload: id })

export const clearCart = (): DeleteAllType => ({ type: DELETE_ALL })

export const cartJock = (jock: any): any => (dispatch: any, getState: any) => {
    if (!getState().cartJocks.jockes.includes(jock)) {
        dispatch(addJokeToCart(jock))
    } else {
        dispatch(deleteItemAction(jock.id));
    }
}
