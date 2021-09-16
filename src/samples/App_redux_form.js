import store from './components/forms/store';
import MaterialUiForm from './components/forms/MaterialUiForm';
import React from 'react';
import { Provider } from 'react-redux';


export default function App() {
  const onSubmit =(values)=>{
    console.log(values);
  }
  return (<Provider store={store}>
   
      <div style={{ padding: 15 }}>
        <h2>Material UI Example</h2>
        <MaterialUiForm onSubmit={onSubmit} />
      </div>
    
  </Provider>);
  
}
