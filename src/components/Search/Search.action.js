export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";

function searchRequestAction() {
    return {
        type: SEARCH_REQUEST
    }
}

function searchSuccessAction(payload) {
    return {
        type: SEARCH_SUCCESS,
        payload: payload
    }
}

function searchFailAction(error) {
    return {
        type: SEARCH_FAIL,
        error: error
    }
}
