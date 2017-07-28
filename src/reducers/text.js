import {TEXT_CHANGED} from '../actions/text'

const DEFAULT_STATE = 'WHATUP DUUUUUDE'

const text = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TEXT_CHANGED:
      return action.text;
    default:
      return state;
  }
}

export default text