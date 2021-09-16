import React from 'react';
import {Alert} from "./components/Alerts/Alert";

export default function App() {
  return(<div>
    <Alert open='true' message='Success message' type='success'/>
  </div>);
  
}
