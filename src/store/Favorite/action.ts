import { JoksTypes } from "../../Interfaces";
import { ADD_JOKE_TO_FAVORITE, DeleteItemActionType, DELETE_ITEM, addJokeToFavorite, DeleteAllType, DELETE_ALL } from "./types";


export const addToFavorite = (jock: JoksTypes): addJokeToFavorite => ({ type: ADD_JOKE_TO_FAVORITE, payload: jock })

export const deleteItemAction = (id: string): DeleteItemActionType => ({ type: DELETE_ITEM, payload: id })

export const clearFavorite = (): DeleteAllType => ({ type: DELETE_ALL })

export const favoriteJock = (jock: any): any => (dispatch: any, getState: any) => {
    if (!getState().favoriteJocks.jockes.includes(jock)) {
        dispatch(addToFavorite(jock))
    } else {
        dispatch(deleteItemAction(jock.id));
    }
}
