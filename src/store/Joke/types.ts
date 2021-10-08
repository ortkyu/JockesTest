import { JoksTypes } from "../../Interfaces";

export const ADD_JOKE = 'ADD_JOKE';

export interface JoksTypesState {
    jock: JoksTypes | null
}

export interface AddJoke {
    type: typeof ADD_JOKE 
    jock: JoksTypes 
  }

  


export type ProductsCardActionTypes = AddJoke
