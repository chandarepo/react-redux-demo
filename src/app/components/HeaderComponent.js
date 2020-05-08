import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: 'blue',//theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

function HeaderComponent (props) {
  return (   
    <CardContent style={{backgroundColor: "#949693"}}>
        <Typography gutterBottom 
            variant="h4" 
            component="h2" 
            color="primary">
            Decimal Conversion Application
        </Typography>
    </CardContent>
  )
}

export default HeaderComponent;
