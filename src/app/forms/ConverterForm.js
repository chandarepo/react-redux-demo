import React from 'react'
import { Field, reduxForm } from 'redux-form'

import ButtonsComponent from './../components/ButtonsComponent'
import FormInputComponent from './../components/FormInputComponent'
import RadioInputComponent from './../components/RadioInputComponents'

let ConverterForm = props => {
    const { format, setFormat, number, setNumber, styles, convertDecimal, resetDecimal} = props
    const reset = () => {
        setFormat('ROMAN');
        setNumber(1);  
        resetDecimal();
      }
    return (
      <form >     
        <RadioInputComponent format={format}  
            setFormat={setFormat}/>
        <FormInputComponent number={number}  
            setNumber ={setNumber} />
        <ButtonsComponent number={number} 
               format={format}
               styles={styles}
               convertDecimal={convertDecimal} 
               reset={reset}/>        
      </form>
    )
  }
  
  ConverterForm = reduxForm({
    form: 'converterForm'
  })(ConverterForm)
  
  export default ConverterForm;