import CartActionTypes from './cart.types';
import { addCartItem } from './cart.utils';

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, cartHidden: !state.cartHidden };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};
