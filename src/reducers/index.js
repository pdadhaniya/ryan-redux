import { combineReducers } from 'redux'
import text from './text'
import number from './number'
import box from './box'

const rootReducer = combineReducers({
  text,
  number,
  box
})

export default rootReducer