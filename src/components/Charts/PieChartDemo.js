import * as React from 'react';
import { makeStyles } from '@material-ui/core';

import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
const useStyles = makeStyles({
  root: {
    width: 200,
   
  },
});
const data = [
  { country: 'Russia', area: 42 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 54 },
  { country: 'Others', area: 45 },
];
const PieChartDemo =({childred,...props}) =>{
  
  const classes=useStyles();
    const [chartData,setChartData]=React.useState(data);

    return (
     
        <Chart className={classes.root}
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
        </Chart>
     
    );
  
}
export default  PieChartDemo;
