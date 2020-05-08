import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function FormInputComponent (props) {
  return (   
    <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            <label> Decimal Input: </label>
            <TextField
                id="standard-number"
                defaultValue="1"
                value={props.number} 
                onChange={e => props.setNumber(Math.round(e.target.value))} />
        </Typography>
    </CardContent>
  )
}

export default FormInputComponent;

