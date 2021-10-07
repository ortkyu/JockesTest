export const ADD_JOKE_TOCART = 'ADD_JOKE_TOCART';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL = 'DELETE_ALL';

export interface JoksTypes {
    categories: []
    created_at: string
    icon_url: string
    id: string
    updated_at: string
    url: string
    value: string
}

export interface CartJocks {
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
