import {PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAIL} from './ProductList.action';

const initialState = {
    result: null,
    load: false,
    fail: null
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return Object.assign({}, state, {
                load: true
            })
        case PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                load: false,
                result: action.payload
            })
        case PRODUCT_FAIL:
            return Object.assign({}, state, {
                load: false,
                fail: action.error
            })
        default:
            return state;
    }
}