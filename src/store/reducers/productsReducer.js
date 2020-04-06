import { ADD_TO_PRODUCTS } from '../actions/productsAction';
import { productsData } from '../../products_data';

const productsReducer = (state = productsData, action = {}) => {
    switch(action.type) {
        case ADD_TO_PRODUCTS: {
            debugger;
            const products = state;
            const product = action.payload;
            let productExist = false;

            for (let i = 0; i < products.length; i++) {
                let existingProduct = products[i];

                if (product.name.trim() === existingProduct.name.trim()) {
                    productExist = true;
                }
            }

            return !productExist ? [...products, product] : products;
        }
        default:
            return state;
    }
}

export default productsReducer;