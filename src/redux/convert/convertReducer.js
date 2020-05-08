import {
    CONVERT_DECIMAL_REQUEST,
    CONVERT_DECIMAL_SUCCESS,
    CONVERT_DECIMAL_FAILURE,
    RESET_DECIMAL
  } from './convertTypes'
  
  const initialState = {
    loading: false,
    number: 1,
    formart: 'ROMAN',
    error: '',
    convertedValue: '',
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CONVERT_DECIMAL_REQUEST:
        return {
          ...state,
          loading: true
        }
      case CONVERT_DECIMAL_SUCCESS:
        return {
            ...state,
          loading: false,
          convertedValue: action.payload,
          error: ''
        }
      case CONVERT_DECIMAL_FAILURE:
        return {
            ...state,
          loading: false,
          convertedValue: '',
          error: action.payload
        }
        case RESET_DECIMAL:
            return {
              loading: false,
              convertedValue: '',
              number: 1,
              formart: 'ROMAN',
              error: '',
            }
      default: return state
    }
  }
  
  export default reducer