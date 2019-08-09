import { createSelector } from 'reselect';

// @ input selectors
const selectCart = state => state.cart;

// @ output selectors
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.cartHidden
);

export const selectCartItemsTotalQuantity = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
);
