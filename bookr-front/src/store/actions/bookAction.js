import { demoAPI } from '../../api'

export const FETCH_BOOKS_START = "FETCH_BOOKS_START"
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS"
export const FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR"


export const fetchBooks = () => dispatch => {
    dispatch({ type: FETCH_BOOKS_START })
    demoAPI
        .get(`books`)
        .then(res => {
            dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res})
        })
        .catch(err => {
            dispatch({ type: FETCH_BOOKS_ERROR, payload: err })
        })
}