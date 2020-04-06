import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = [];

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const cart = state;

      const existingProductIndex = findProductIndex(cart, product.id);
      const updatedCart = existingProductIndex >= 0 ? updateProductUnits(cart, product, 'add') : [...cart, product]

      return updatedCart;
    }
    case REMOVE_FROM_CART: {
      const product = action.payload;
      const cart = state;

      const existingProductIndex = findProductIndex(cart, product.id);
      const updatedCart = existingProductIndex >= 0 ? updateProductUnits(cart, product, 'remove') : [...cart, product]

      return updatedCart;
    }
    default:
      return state;
  }
}

const findProductIndex = (cart, productID) => {
  return cart.findIndex(p => p.id === productID);
}

const updateProductUnits = (cart, product, mode) => {
  const productIndex = findProductIndex(cart, product.id);

  const updatedCart = [...cart];
  const existingProduct = updatedCart[productIndex];
  let existingProductUnit = existingProduct.units;

  const updatedProductUnits = {
    ...existingProduct,
    units: mode === 'add' ? existingProduct.units + product.units : existingProduct.units - product.units
  };

  if (mode === 'remove' && existingProductUnit === 1) {
    let updatedCartList = updatedCart.filter(p => p.id !== product.id);
    return updatedCartList;
  }

  updatedCart[productIndex] = updatedProductUnits;
  return updatedCart;
}

export default cartReducer;