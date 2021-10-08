export const ADD_JOKE = 'ADD_JOKE';
export const ADD_LOAD = 'ADD_LOAD';



export interface JoksTypes {
    categories: []
    created_at: string
    icon_url: string
    id: string
    updated_at: string
    url: string
    value: string
}

export interface JoksTypesState {
    jock: JoksTypes | undefined
    loading: boolean
}

export interface AddJoke {
    type: typeof ADD_JOKE 
    jock: JoksTypes 
  }

  export interface AddLoad {
    type: typeof ADD_LOAD
    payload: boolean 
  }
  


export type ProductsCardActionTypes = AddJoke | AddLoad //| SubQuantity | RemoveProduct | AddToCardStorage | AddToCard
