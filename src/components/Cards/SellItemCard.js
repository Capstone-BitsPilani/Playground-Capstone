import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SellItemCard({children,...props}) {
  const classes = useStyles();
 const [item,setItem]=React.useState(props.item);
 
  return (
    <Card className={classes.root}>
     <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
      
      </CardActions>
      <CardActionArea>
      <CardMedia
        className={classes.media}
        image={item.image}
        title={item.imagetitle}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
        Rs {item.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {item.description}

        </Typography>
      </CardContent>
      </CardActionArea>
      
    </Card>
  );
}