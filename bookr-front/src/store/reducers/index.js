import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { bookReducer } from './bookReducer'
import { reviewReducer } from './reviewReducer'

export default combineReducers({
    loginReducer,
    bookReducer,
    reviewReducer
})