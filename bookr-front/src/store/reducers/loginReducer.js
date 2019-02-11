import {
    START_LOGIN_USER,
    SUCCESS_LOGIN_USER,
    ERROR_LOGIN_USER
} from '../actions/loginAction'

const initialState = {
    loggingIn: false,
    isLoggedIn: false,
    error: ''
}

export const loginReducer = (state =initialState, action) => {
    switch (action.type) {
        case START_LOGIN_USER:
            return {
                ...state,
                loggingIn: true
            }

        case SUCCESS_LOGIN_USER:
            return {
                ...state,
                loggingIn: false,
                error: ''
            }
            
        case ERROR_LOGIN_USER:
            return {
                ...state,
                loggingIn: false,
                error: action.paylaod
            }    

        default:
            return state    
    }
}