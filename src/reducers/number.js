import {NUMBER_CHANGED} from '../actions/number'

const DEFAULT_STATE = 42

const number = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case NUMBER_CHANGED:
      return action.number;
    default:
      return state;
  }
}

export default number