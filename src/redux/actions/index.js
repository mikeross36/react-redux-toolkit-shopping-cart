import { types } from "../types";

export const setProducts = products => {
  return {
    type: types.SET_PRODUCTS,
    payload: products
  }
};

export const addProductToCart = product => {
  return {
    type: types.ADD_PRODUCT_TO_CART,
    payload: product
  }
};

export const removeCartItem = id => {
  return {
    type: types.REMOVE_CART_ITEM,
    payload: id
  }
};

export const increaseQuant = id => {
  return {
    type: types.INCREASE_QUANT,
    payload: id
  }
};

export const decreaseQuant = id => {
  return {
    type: types.DECREASE_QUANT,
    payload: id
  }
};

export const clearCart = () => {
  return {
    type: types.CLEAR_CART
  }
}