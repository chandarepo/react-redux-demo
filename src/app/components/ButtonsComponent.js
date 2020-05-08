import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import StyledButton from './StyledButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: '10px',
      },
    },
  });

function ButtonsComponent (props) {
    const classes = useStyles();
  return (   
    <CardActions>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button size="medium" 
                onClick={() => props.convertDecimal(props.number, props.format)}>
                Convert
            </Button>
            <Button size="medium" 
                onClick={() => props.reset()}>
                Reset
            </Button>
        </ButtonGroup>
  </CardActions>
  )
}
export default ButtonsComponent;