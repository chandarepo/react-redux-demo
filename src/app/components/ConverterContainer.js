import React, { useState } from 'react'

import styles from './ConverterContainer.style'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import { connect } from 'react-redux'
import { convertDecimal, resetDecimal} from '../../redux'

import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ButtonsComponent from './ButtonsComponent'
import FormInputComponent from './FormInputComponent'
import RadioInputComponent from './RadioInputComponents'



const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 400,
  },
});

function ConverterContainer (props) {
  const classes = useStyles();
  const [number, setNumber] = useState(1);
  const [format, setFormat] = useState('ROMAN');

  const reset = () => {
    setFormat('ROMAN');
    setNumber(1);  
    props.resetDecimal();
  }

  const RadioInputs = (props) => {
    const inputs = [["ROMAN", "ROMAN"], ["BINARY", "BINARY"], ["HEXADECIMAL", "HEXADECIMAL"]]    
    return (
        <div  style={styles.radioWrapper}>
          <label> Convert Type: </label>
          {
            inputs.map(([label, value], i) => (
              <div key={ i }>
                <input type="radio"
                        checked={ format === value } 
                        onChange={e => setFormat(e.target.value) } 
                        value={ value } /> 
                    { label }
              </div>
              )
            )
          }
        </div>
      )
  }
  
  return (
      <div  style={styles.container}>  
          <Card  style={styles.card}>
            <HeaderComponent/>
            <RadioInputComponent format={format} 
              setFormat={setFormat}/>
            <FormInputComponent number={number} 
                setNumber ={setNumber} />
            <div style={styles.btnWrapper}>
              <ButtonsComponent number={number} 
                format={format}
                convertDecimal={props.convertDecimal} 
                reset={reset}/>   
            </div>
            <div >
              <hr/>
              <FooterComponent convertedValue={props.convertedValue}/>
            </div>
          </Card>
      </div>

  )
}

const mapStateToProps = state => {
  return {
    convertedValue: state.convert.convertedValue,
    number: state.number,
    format: state.format,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    convertDecimal: (number, format) => dispatch(convertDecimal(number,format)),
    resetDecimal: () => dispatch (resetDecimal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConverterContainer)
