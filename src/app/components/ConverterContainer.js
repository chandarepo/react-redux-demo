import React, { useState } from 'react'
import { connect } from 'react-redux'
import { convertDecimal, resetDecimal} from '../../redux'
import styles from './ConverterContainer.style'

function ConverterContainer (props) {
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
    
      <div >
        <div> 
          <h2>Decimal Conversion Application </h2> 
        </div>
        <hr/>
      </div>
      
      <div>
        <RadioInputs />
      </div> 

      <div>
        <label> Decimal Input: </label>
        <input type='number' value={number} onChange={e => setNumber(e.target.value)} />
      </div> 

      <div style={styles.btnWrapper}>
        <div style={styles.buttonWrapper}>
          <button onClick={() => props.convertDecimal(number, format)}>Convert</button>
        </div>
        <div style={styles.buttonWrapper}>
          <button onClick={() => reset()}> Reset</button>
      </div>
        
      </div>

      <div >
        <hr/>
        <div> 
          <h2>Converted Result: {props.convertedValue} </h2> 
        </div>
      </div>

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
