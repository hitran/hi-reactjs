import {SHOPPING_CART_REQUEST, SHOPPING_CART_SUCCESS, SHOPPING_CART_FAIL} from './ShoppingCart.action';

const initialState = {
    load: false,
    data: [],
    fail: null
}
export default function shoppingCartReducer(state = initialState, action) {
    switch(action.type) {
        case SHOPPING_CART_REQUEST:
            return {
                ...state,
                load: true
            }
        case SHOPPING_CART_SUCCESS:
            return {
                ...state,
                load: false,
                data: action.payload
            }
        case SHOPPING_CART_FAIL:
            return {
                ...state,
                load:false,
                fail: action.error
            }
        default:
            return state;
    }

}