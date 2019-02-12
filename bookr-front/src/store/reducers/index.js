import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { bookReducer } from './bookReducer'

export default combineReducers({
    loginReducer,
    bookReducer
})