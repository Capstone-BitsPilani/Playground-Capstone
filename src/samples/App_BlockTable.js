
import CreateApartmentModal from "./components/Dialog/CreateApartmentModal";
import Button from '@material-ui/core/Button';
import React from 'react';
import {useModelState} from './misc/custom-hooks';
import ApartmentBlockTable from "./components/Tables/ApartmentBlockTable";


function App() {



  return (
    <div className="App">
       <ApartmentBlockTable />
    </div>
  );
}

export default App;
