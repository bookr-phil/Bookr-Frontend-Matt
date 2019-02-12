import { API } from '../../api'

export const START_LOGIN_USER = "START_LOGIN_USER"
export const SUCCESS_LOGIN_USER = "SUCCESS_LOGIN_USER"
export const ERROR_LOGIN_USER = "ERROR_LOGIN_USER"

export const userLogin = inputLogin => dispatch => {
    dispatch({ type: START_LOGIN_USER })
    API
        .post(`login`, inputLogin)
        .then(res => {
            API.defaults.headers.common['Authorization'] = res.data.token
            dispatch({ type: SUCCESS_LOGIN_USER, payload: res.data.books })
            localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            dispatch({ type: ERROR_LOGIN_USER, payload: err })
        })
}