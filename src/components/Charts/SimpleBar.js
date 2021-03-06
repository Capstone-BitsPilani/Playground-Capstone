import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import {
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
const useStyles = makeStyles({
    root: {
      width: 200,
     
    },
  });
  
const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];

 const SimpleBar =({children,...props})=> {
     
    const classes = useStyles();

    const[chartData,setchartData]=React.useState(data);
   


    return (
      <Paper className={classes.root}>
        <Chart
          data={chartData} 
        >

          <BarSeries
            valueField="population"
            argumentField="year"
          />
        </Chart>
      </Paper>
    );
  
}
export default SimpleBar;