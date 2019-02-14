import { demoAPI } from '../../api'

export const FETCH_BOOKS_START = "FETCH_BOOKS_START"
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS"
export const FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR"

export const FETCH_REVIEWS_START = "FETCH_REVIEWS_START"
export const FETCH_REVIEWS_SUCCESS = "FETCH_REVIEWS_SUCCESS"
export const FETCH_REVIEWS_ERROR = "FETCH_REVIEWS_ERROR"

export const POST_REVIEW_START = "POST_REVIEW_START"
export const POST_REVIEW_SUCCESS = "POST_REVIEW_SUCCESS"
export const POST_REVIEW_ERROR = "POST_REVIEW_ERROR"

export const DELETE_BOOK_START = "DELETE_BOOK_START"
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS"
export const DELETE_BOOK_ERROR = "DELETE_BOOK_ERROR"

export const ADD_BOOK_START = "ADD_BOOK_START"
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS"
export const ADD_BOOK_ERROR = "ADD_BOOK_ERROR"


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

export const fetchReviews = () => dispatch => {
    dispatch({ type: FETCH_REVIEWS_START })
    demoAPI
        .get(`reviews`)
        .then(res => {
            
            dispatch({  type: FETCH_REVIEWS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_REVIEWS_ERROR, payload: err })
        })
}

export const addReview = reviewInfo => dispatch => {
    dispatch({ type: POST_REVIEW_START, payload: reviewInfo })
    demoAPI
        .post(`reviews`, reviewInfo)
        .then(res => {
            console.log(res)
            dispatch({ type: POST_REVIEW_SUCCESS })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_REVIEW_ERROR })
        })
}

export const deleteBook = id => dispatch => {
    dispatch({ type: DELETE_BOOK_START, payload: id })
    demoAPI
        .delete(`books/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETE_BOOK_SUCCESS })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: DELETE_BOOK_ERROR })
        })
}

export const addBook = bookInfo => dispatch => {
    dispatch({ type: ADD_BOOK_START, payload: bookInfo })
    demoAPI
        .post(`books`, bookInfo)
        .then(res => {
            console.log(res)
            dispatch({ type: ADD_BOOK_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ADD_BOOK_ERROR, payload: err })
        })
}