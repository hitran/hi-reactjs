export const SHOPPING_CART_REQUEST = "SHOPPING_CART_REQUEST";
export const SHOPPING_CART_SUCCESS = "SHOPPING_CART_SUCCESS";
export const SHOPPING_CART_FAIL = "SHOPPING_CART_FAIL";


function shoppingCartRequestAction() {
    return {
        type: SHOPPING_CART_REQUEST
    }
}

function shoppingCartSuccessAction(data) {
    return {
        type: SHOPPING_CART_SUCCESS,
        payload: data
    }
}

function shoppingCartFailAction(error) {
    return {
        type: SHOPPING_CART_FAIL,
        error: error
    }
}

export function shoppingCartAction() {
    return async() => {
        try {

        } catch(error) {

        }
    }
}

export function addToCartAction(products) {
    return (dispatch) => {
        console.log('add to cart', products)
        dispatch(shoppingCartSuccessAction(products));
    }
}