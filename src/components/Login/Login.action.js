import firebase from 'firebase';
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

function loginRequestAction() {
    return {
        type: LOGIN_REQUEST
    }
}

function loginSuccessAction(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

function loginFailAction(error) {
    return {
        type: LOGIN_FAIL,
        error: error
    }
}

export default function loginAction(email, password) {
    return async(dispatch)=> {
        dispatch(loginRequestAction());
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(loginSuccessAction(result));
          } catch (error) {
              dispatch(loginFailAction(error));
          }
    }
}