import store from './components/forms/store';
import ArrayForm from './components/forms/ArrayForm';
import React from 'react';
import { Provider } from 'react-redux';


export default function App() {
  const onSubmit =(values)=>{
    console.log(values);
  }
  return (<Provider store={store}>
   
      <div style={{ padding: 15 }}>
        <h2>Material UI Example</h2>
        <ArrayForm onSubmit={onSubmit} />
      </div>
    
  </Provider>);
  
}
