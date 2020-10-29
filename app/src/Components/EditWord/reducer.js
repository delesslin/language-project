export const INIT = 'INIT'
export const ADD_MULTI = 'ADD_MULTI'
export const REMOVE_MULTI = 'REMOVE_MULTI'
export const REPLACE = 'REPLACE'
const reducer = (state, action) => {
  switch (action.type) {
    case INIT:
      return action.data
    case REPLACE:
      // dispatch must send an obj with REPLACE, property name, replacement value
      return {
        ...state,
        [action.property]: action.value,
      }
    case ADD_MULTI:
      // dispatch must send an obj with ADD_MULTI, property name, array of values to be added to array
      if (Array.isArray(action.value)) {
        return {
          ...state,
          [action.property]: [...state[action.property], ...action.value],
        }
      } else {
        return {
          ...state,
          [action.property]: [...state[action.property], action.value],
        }
      }
    case REMOVE_MULTI:
      // dispatch must send an obj with REMOVE_MULTI, property name, and index of value to be removed
      return {
        ...state,
        [action.property]: state[action.property].filter(
          (entry, i) => i !== action.index
        ),
      }
    default:
      return state
  }
}

export default reducer
