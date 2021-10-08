import { JoksTypes } from "../../Interfaces";
export const ADD_JOKE_TOCART = 'ADD_JOKE_TOCART';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL = 'DELETE_ALL';


export interface CartJocksState {
    jockes: JoksTypes[] 
}
export interface DeleteItemActionType {
    type: typeof DELETE_ITEM;
    payload: string;
  };

  export interface DeleteAllType {
    type: typeof DELETE_ALL;
  };

export interface AddJokeToCart {
    type: typeof ADD_JOKE_TOCART;
    payload: JoksTypes;
  };


export type ProductsCardActionTypes = AddJokeToCart | DeleteItemActionType | DeleteAllType
