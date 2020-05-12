import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {reduxForm, Field} from 'redux-form';

const maxCheck = (num, max=1000)=>{
  num = Math.round(num);
  while (num > max){
    num = Math.floor(num/10);
  }
  return num;
};

function FormInputComponent (props) {
  return (   
    <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            <label> Decimal Input: </label>
            <TextField type="number"
                id="standard-number"
                defaultValue="1"
                value={props.number} 
                inputProps={{ min:0, max:1000}}
                onChange={e => props.setNumber(maxCheck(e.target.value))} />
        </Typography>
    </CardContent>
  )
}

export default reduxForm({
  form:'numberConverterForm'
})(FormInputComponent);

