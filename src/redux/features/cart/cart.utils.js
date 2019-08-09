export const addCartItem = (cartItems, itemToAdd) => {
  const foundItem = cartItems.find(item => item.id === itemToAdd.id);

  if (!foundItem) return [...cartItems, { ...itemToAdd, quantity: 1 }];

  return cartItems.map(item =>
    item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const decreaseCartItem = (cartItems, cartItemToDecrease) => {
  const foundCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToDecrease.id
  );

  if (foundCartItem.quantity === 1)
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id);

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
