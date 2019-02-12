import { FETCH_BOOKS_START, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from '../actions/bookAction'

const initialState = {
    fetchingBooks: false,
    books: [],
    error: ""
}

export const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOKS_START:
            return {
                ...state,
                fetchingBooks: true
            }

        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                fetchingBooks: false,
                books: action.payload.data
            }    

        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                fetchingBooks: false,
                error: action.payload.err
            }    

         default:
            return state   
    }
}