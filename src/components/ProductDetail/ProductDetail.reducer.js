import { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL } from './ProductDetail.action';

const initialState = {
    result: null,
    load: null,
    fail: null
};

export default function productDetailReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return Object.assign({}, state, {
                load: true
            })
        case PRODUCT_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                result: action.payload,
                load: false,
            })
        case PRODUCT_DETAIL_FAIL:
            return Object.assign({}, state, {
                load: false,
                error: action.error
            })
        default:
            return state;
    }
}