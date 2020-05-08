import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import ConverterContainer from './app/components/ConverterContainer'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <ConverterContainer />
      </div>
    </Provider>
  )
}

export default App
