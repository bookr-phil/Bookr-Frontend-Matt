import { FETCH_REVIEWS_START, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_ERROR, POST_REVIEW_START, POST_REVIEW_SUCCESS, POST_REVIEW_ERROR } from '../actions/bookAction'

const initialState = {
    isFetchingReviews: false,
    isPostingReview: false,
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
            
        case POST_REVIEW_START:
            return {
                ...state,
                isPostingReview: true
            }

        case POST_REVIEW_SUCCESS:
            return {
                ...state,
                isPostingReview: false
            }

        case POST_REVIEW_ERROR:
            return {
                ...state,
                isPostingReview: false,
                error: action.payload
            }    

         default:
            return state   
    }
}