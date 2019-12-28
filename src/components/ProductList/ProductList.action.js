import dataJson from '../../phone.json'; 
export const PRODUCT_REQUEST = "PRODUCT_REQUEST";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_FAIL = "PRODUCT_FAIL";

function productRequestAction() {
    return {
        type: PRODUCT_REQUEST
    }
}

function productSuccessAction(payload) {
    return {
        type: PRODUCT_SUCCESS,
        payload: payload
    }
}

function productFailAction(error) {
    return {
        type: PRODUCT_FAIL,
        error: error
    }
}

export function getProductListAction() {
    return (dispatch) => {
        dispatch(productRequestAction());
        dispatch(productSuccessAction(dataJson.data));
    }
}