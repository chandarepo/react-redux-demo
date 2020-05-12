import React, { useState } from 'react'
import { connect } from 'react-redux'
import { convertDecimal, resetDecimal} from '../../redux'

import styles from './ConverterContainer.style'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ButtonsComponent from './ButtonsComponent'
import FormInputComponent from './FormInputComponent'
import RadioInputComponent from './RadioInputComponents'
import ConverterForm from './../forms/ConverterForm'

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

  return (
      <div  style={styles.container}>  
          <Card  style={styles.card}>
            <HeaderComponent/>
            <ConverterForm format={format} 
                setFormat={setFormat}
                number={number} 
                setNumber ={setNumber}
                convertDecimal={props.convertDecimal} 
                resetDecimal={props.resetDecimal}
                styles={styles}
            />
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
