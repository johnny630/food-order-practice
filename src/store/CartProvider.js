import React from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartInitValue = {
    item: [],
    amount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartInitValue}>
      props.children
    </CartContext.Provider>
  );
};

export default CartProvider;
