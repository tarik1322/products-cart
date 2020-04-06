export const ADD_TO_PRODUCTS = "ADD_TO_PRODUCTS";

export function addToProductsAction({id, name, price, category}) {
    return {
        type: ADD_TO_PRODUCTS,
        payload: { id, name, price, category }
    }
}