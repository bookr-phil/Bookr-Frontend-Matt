import { FETCH_REVIEWS_START, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_ERROR } from '../actions/bookAction'

const initialState = {
    isFetchingReviews: false,
    reviews: [],
    error: ''
}

export const reviewReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_REVIEWS_START:
            return {
                ...state,
                isFetchingReviews: true,
            }

        case FETCH_REVIEWS_SUCCESS:
            return {
                ...state,
                isFetchingReviews: false,
                reviews: action.payload,
                error: ''
            }
           
        case FETCH_REVIEWS_ERROR:
            return {
                ...state,
                isFetchingReviews: false,
                error: action.payload
            }    

         default:
            return state   
    }
}