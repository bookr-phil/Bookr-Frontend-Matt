import axios from 'axios'

const BASE_URL = `https://bookr-app.herokuapp.com/api/`

export const START_LOGIN_USER = "START_LOGIN_USER"
export const SUCCESS_LOGIN_USER = "SUCCESS_LOGIN_USER"
export const ERROR_LOGIN_USER = "ERROR_LOGIN_USER"

export const userLogin = inputLogin => dispatch => {
    dispatch({ type: START_LOGIN_USER })
    axios
        .post(`${BASE_URL}login`, inputLogin)
        .then(res => {
            dispatch({ type: SUCCESS_LOGIN_USER })
            localStorage.setItem('jwt', res.data.token)
        })
        .catch(err => {
            dispatch({ type: ERROR_LOGIN_USER, payload: err })
        })
}