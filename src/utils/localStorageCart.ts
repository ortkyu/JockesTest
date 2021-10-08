import { JoksTypes } from "../Interfaces";

export const loadLS = (): JoksTypes[] | [] => {
  try {
    const initialState = localStorage.getItem('cartItems');
    if (initialState === null) {
      return [];
    }
    return JSON.parse(initialState);
  } catch (err) {
    return [];
  }
};

export const setLS = (items: JoksTypes[]): void => {
  localStorage.setItem('cartItems', JSON.stringify(items));
};

export const removeLs = (): void => {
  localStorage.removeItem('cartItems');
};