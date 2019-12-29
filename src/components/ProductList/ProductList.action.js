import axios from 'axios';
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

export function getProductListAction(name = "ao-so-mi-nam") {
    return async(dispatch) => {
        dispatch(productRequestAction());
        try {
            const result = await axios({
                method: "GET",
                url: `https://mapi.sendo.vn/mob/product/cat/${name}?p=1`
            })
            dispatch(productSuccessAction(result.data.data));
        } catch (error) {
            dispatch(productFailAction(error));
        }
    }
}

export function getProductListBySearch(keyword) {
    return async (dispatch) => {
        if (keyword) {
            dispatch(productRequestAction());
            try {
                const result = await axios({
                    method: "GET",
                    url: `https://mapi.sendo.vn/mob/product/search?p={1}&q=${keyword}`
                })
                dispatch(productSuccessAction(result.data.data));
            } catch (error) {
                dispatch(productFailAction(error));
            }
        }
    }
}


export function getProductListBySort(sortedProductList) {
    return (dispatch) => {
        dispatch(productRequestAction());
        dispatch(productSuccessAction(sortedProductList));
    }
}