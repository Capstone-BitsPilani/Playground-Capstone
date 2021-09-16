

import React from 'react';
import { Button } from "@material-ui/core";
import { Progress } from "./components/Progress/Progress";
function App() {
  const[isLoading,setIsLoading]=React.useState(false)
  const startLoading=()=>{
    setIsLoading(true);
  }
  const stopLoading=()=>{
    setIsLoading(false);
  }
  return (
   <div> <Button onClick={startLoading}>start</Button>
    <Button onClick={stopLoading}>stop</Button>
    {isLoading &&
    <Progress/>}
    </div>
  )
}

export default App;
