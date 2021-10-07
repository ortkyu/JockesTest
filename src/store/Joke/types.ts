export const ADD_JOKE = 'ADD_JOKE';



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
}

export interface AddJoke {
    type: typeof ADD_JOKE 
    jock: JoksTypes 
  }


export type ProductsCardActionTypes = AddJoke //| SubQuantity | RemoveProduct | AddToCardStorage | AddToCard
