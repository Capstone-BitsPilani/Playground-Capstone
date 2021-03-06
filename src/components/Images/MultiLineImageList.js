

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 800,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function MultiLineImageList({children,...props}) {
  const classes = useStyles();
  const images=props.images;
  return (
    <div className={classes.root}>
      <ImageList rowHeight={180}  cols={4} className={classes.imageList}>

        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
