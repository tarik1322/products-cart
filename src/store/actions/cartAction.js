export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addToCartAction({id, name, price, category, units}) {
    return {
        type: ADD_TO_CART,
        payload: {id, name, price, category, units}
    }
}

export function removeFromCartAction({id, name, price, category, units}) {
    return {
        type: REMOVE_FROM_CART,
        payload: {id, name, price, category, units}
    }
}