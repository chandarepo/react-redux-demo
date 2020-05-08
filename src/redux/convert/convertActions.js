import axios from 'axios'
import {
    CONVERT_DECIMAL_REQUEST,
    CONVERT_DECIMAL_SUCCESS,
    CONVERT_DECIMAL_FAILURE,
    RESET_DECIMAL
} from './convertTypes'

export const convertDecimal = (number, format) => {
  return (dispatch) => {
    dispatch(convertDecimalRequest(number, format))
    axios.get('http://localhost:8080/number-converter/convert/'+number+'/'+format,

    ).then(response => {
        // response.data is the users
        const convertedValue = response.data ? response.data.convertedValue : ''
        dispatch(convertDecimalSuccess(convertedValue))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(convertDecimalFailure(error.message))
      })
  }
}

export const convertDecimalRequest = (payload) => {
  return {
    type: CONVERT_DECIMAL_REQUEST,
    payload: payload
  }
}

export const convertDecimalSuccess = convertedValue => {
  return {
    type: CONVERT_DECIMAL_SUCCESS,
    payload: convertedValue
  }
}

export const convertDecimalFailure = error => {
  return {
    type: CONVERT_DECIMAL_FAILURE,
    payload: error
  }
}
export const resetDecimal = () => {
    return {
      type: RESET_DECIMAL,
    }
  }
