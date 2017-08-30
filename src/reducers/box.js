import { NEW_BOX_REQUEST } from '../actions/box'

const DEFAULT_STATE = []
let beginningValue = 0

const box = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case NEW_BOX_REQUEST:
      beginningValue += 1
      return state.concat({value: beginningValue})
    default:
      return state;
  }
}

export default box