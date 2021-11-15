import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartInitValue = {
    items: [],
    amount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartInitValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
