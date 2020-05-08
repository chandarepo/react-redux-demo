import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function FooterComponent (props) {
  return (   
    <CardContent style={{backgroundColor: "#949693"}} >
        <Typography gutterBottom variant="h5" component="h2">
            <b>Converted Result: {props.convertedValue} </b> 
        </Typography>
    </CardContent>
  )
}

export default FooterComponent;