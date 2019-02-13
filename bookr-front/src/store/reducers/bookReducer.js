import { FETCH_BOOKS_START, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR, DELETE_BOOK_START, DELETE_BOOK_SUCCESS, DELETE_BOOK_ERROR } from '../actions/bookAction'

const initialState = {
    fetchingBooks: false,
    books: [],
    deletingBooks: false,
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

        case DELETE_BOOK_START:
            return {
                ...state,
                deletingBooks: true
            }    

        case DELETE_BOOK_SUCCESS:
            return {
                ...state,
                deletingBooks: false
            }    

        case DELETE_BOOK_ERROR:
            return {
                ...state,
                deletingBooks: false,
                error: action.payload
            }    
    

         default:
            return state   
    }
}