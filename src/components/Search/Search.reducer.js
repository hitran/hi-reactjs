import {SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL} from './Search.action';

const initialState = {
    result: null,
    load: false,
    fail: null
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_REQUEST:
            return Object.assign({}, state, {
                load: true
            })
        case SEARCH_SUCCESS:
            return Object.assign({}, state, {
                load: false,
                result: action.payload
            })
        case SEARCH_FAIL:
            return Object.assign({}, state, {
                load: false,
                fail: action.error
            })
        default:
            return state;
    }
}