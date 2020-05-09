import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const maxCheck = (num, max=1000)=>{
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
            <TextField
                id="standard-number"
                defaultValue="1"
                value={props.number} 
                inputProps={{ maxLength:4 }}
                onChange={e => props.setNumber(maxCheck(Math.round(e.target.value)))} />
        </Typography>
    </CardContent>
  )
}

export default FormInputComponent;

