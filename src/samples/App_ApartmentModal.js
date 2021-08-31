
import CreateApartmentModal from "./components/Dialog/CreateApartmentModal";
import Button from '@material-ui/core/Button';
import React from 'react';
import {useModelState} from './misc/custom-hooks';


function App() {
  const { isOpen, open, close } = useModelState();



  return (
    <div className="App">
       <div>
      <Button variant="outlined" color="primary" onClick={open}>
        Open form dialog
      </Button>
      {isOpen && <CreateApartmentModal handleClose={close} open={open} />}
      </div>
    </div>
  );
}

export default App;
