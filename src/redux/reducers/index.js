import { types } from "../types";
import { combineReducers } from "redux";

const initialState = {
  products: [],
  cartItems: [],
  cartItemsTotal: 0,
  cartMoneyTotal: 0
};

const setProducts = (state, products) => {
  return { ...state, products: products };
};

const addProductToCart = (state, product) => {
  const cartItemsCopy = [...state.cartItems]
  const currItemIdx = cartItemsCopy.findIndex(item => {
    return item.id === product.id
  })
  if (currItemIdx < 0) {
    cartItemsCopy.push({ ...product, quantity: 1 })
  }
  else {
    const itemCopy = cartItemsCopy[currItemIdx]
    itemCopy.quantity++;
    cartItemsCopy[currItemIdx] = itemCopy
  }
  return { ...state, cartItems: cartItemsCopy }
};

const removeCartItem = (state, id) => {
  let cartItemsCopy = [...state.cartItems]
  cartItemsCopy = cartItemsCopy.filter(item => {
    return item.id !== id;
  })
  return { ...state, cartItems: cartItemsCopy }
};

const increaseQuant = (state, id) => {
  let incItemQuant = state.cartItems.map(item => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 }
    }
    return item;
  })
  return { ...state, cartItems: incItemQuant }
};

const decreaseQuant = (state, id) => {
  const decItemQuant = state.cartItems.map(item => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity - 1 }
    }
    return item;
  }).filter(item => {
    return item.quantity !== 0;
  })
  return { ...state, cartItems: decItemQuant }
};

const getTotals = state => {
  let { cartItemsTotal, cartMoneyTotal } = state.cartItems.reduce((acc, item) => {
    const { price, quantity } = item;
    const itemMoneyTotal = price * quantity;

    acc.cartMoneyTotal += itemMoneyTotal;
    acc.cartItemsTotal += quantity;
    return acc;
  }, { cartItemsTotal: 0, cartMoneyTotal: 0 });
  cartMoneyTotal = +cartMoneyTotal.toFixed(2)

  return {...state, cartItemsTotal, cartMoneyTotal}
};

const clearCart = state => {
  return {...state, cartItems: []}
}
 
const productReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return setProducts(state, action.payload);
    case types.SET_CART_ITEMS:
      return state.cartItems;
    case types.ADD_PRODUCT_TO_CART:
      return addProductToCart(state, action.payload)
    case types.REMOVE_CART_ITEM:
      return removeCartItem(state, action.payload)
    case types.INCREASE_QUANT:
      return increaseQuant(state, action.payload)
    case types.DECREASE_QUANT:
      return decreaseQuant(state, action.payload)
    case types.GET_TOTALS:
      return getTotals(state)
    case types.CLEAR_CART:
      return clearCart(state)
    default:
      return state;
  }
};

export default combineReducers({
  productReducer: productReducer
})