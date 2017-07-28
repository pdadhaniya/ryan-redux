import { combineReducers } from 'redux'
import text from './text'
import number from './number'

const rootReducer = combineReducers({
  text,
  number
})

export default rootReducer