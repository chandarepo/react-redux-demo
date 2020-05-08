import React from 'react'
import styles from './ConverterContainer.style'

const RadioInputComponent = (props) => {
    const inputs = [["ROMAN", "ROMAN"], ["BINARY", "BINARY"], ["HEXADECIMAL", "HEXADECIMAL"] ,["HINDI", "HINDI"]]    
    return (
        <div  style={styles.radioWrapper}>
          <label> Convert To: </label>
          {
            inputs.map(([label, value], i) => (
              <div key={ i }>
                <input type="radio"
                        checked={ props.format === value } 
                        onChange={e => props.setFormat(e.target.value) } 
                        value={ value } /> 
                    { label }
              </div>
              )
            )
          }
        </div>
      )
  }
  export default RadioInputComponent;