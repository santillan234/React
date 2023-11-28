import { TYPES } from "../actions/actions"

export const initialState = {counter: 0}

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.incrementar:
      return {counter: state.counter + 1}
    default:
      return state
  }
} 