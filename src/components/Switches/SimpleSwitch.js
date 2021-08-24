import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const CustumSwitch = withStyles({
  switchBase: {
    color: orange[300],
    '&$checked': {
      color: orange[500],
    },
    '&$checked + $track': {
      backgroundColor: orange[500],
    },
  },
  checked: {},
  track: {},
})(Switch);




export default function SimpleSwitch({children,...props}) {
  const [isChecked, setCheckState] = React.useState(props.default);

  const handleChange = (event) => {
    setCheckState( event.target.checked );
  };

  return (
   
      <FormControlLabel
        control={<CustumSwitch checked={isChecked} onChange={handleChange} name="switch" />}
        label={props.label} labelPlacement="start"

      />
   
  
  );
}