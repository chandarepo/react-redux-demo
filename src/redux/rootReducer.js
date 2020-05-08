import { combineReducers } from 'redux'
import convertReducer from './convert/convertReducer'

const rootReducer = combineReducers({
  //cake: cakeReducer,
  //iceCream: iceCreamReducer,
  //user: userReducer,
  convert: convertReducer
})

export default rootReducer
