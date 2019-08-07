export const addCartItem = (cartItems, itemToAdd) => {
  const foundItem = cartItems.find(item => item.id === itemToAdd.id);

  if (!foundItem) return [...cartItems, { ...itemToAdd, quantity: 1 }];

  return cartItems.map(item =>
    item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};
