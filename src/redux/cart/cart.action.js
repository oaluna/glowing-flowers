import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer.utils';

export const addItem = (items, productToAdd) => {
  const existingItem = items.find(
    (item) => item.id === productToAdd.id
  );

  if (existingItem) {
    return items.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...items, { ...productToAdd, quantity: 1 }];
};

export const removeItem = (items, itemToRemove) => {
  // find the cart item to remove
  const existingItem = items.find(
    (item) => item.id === itemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingItem.quantity === 1) {
    return items.filter((item) => item.id !== itemToRemove.id);
  }

  // return back items with matching cart item with reduced quantity
  return items.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const clearItem = (items, itemToClear) =>
  items.filter((item) => item.id !== itemToClear.id);

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (items, productToAdd) => {
  const newItems = addItem(items, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newItems);
};

export const removeItemFromCart = (items, itemToRemove) => {
  const newItems = removeItem(items, itemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newItems);
};

export const clearItemFromCart = (items, itemToClear) => {
  const newItems = clearItem(items, itemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newItems);
};
