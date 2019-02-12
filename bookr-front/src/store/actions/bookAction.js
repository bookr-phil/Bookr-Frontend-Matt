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
            dispatch({ type: POST_REVIEW_ERROR})
        })
}
