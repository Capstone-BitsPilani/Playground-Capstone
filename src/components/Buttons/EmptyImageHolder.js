import React from 'react'
import Button from '@material-ui/core/Button';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    cameraIcon: {
      margin: 0
    },
  }));
  const icon=<AddAPhotoOutlinedIcon style={{ fontSize: 20 }}  />;
export const EmptyImageHolder = () => {
    const classes = useStyles();
     return (
        <Button
        style={{ width: "80px", height: "80px", margin:"5px"}}
        classes={{ AddAPhotoOutlinedIcon: classes.cameraIcon }}
        variant="outlined"
        startIcon={icon} />
    )
}
