import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function HeaderComponent (props) {
  return (   
    <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Decimal Conversion Application
        </Typography>
    </CardContent>
  )
}

export default HeaderComponent;
