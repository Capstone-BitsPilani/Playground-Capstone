
import ContactCard from "./components/Cards/ContactCard";
import ModelCard from "./components/Cards/ModelCard";

const MODEL_DEFAULT={
  
    name: 'Terra Algeria',
    area:{
      carpetarea:1200,
      builduparea:1400,
      superbuilduparea:1600
    },
    rooms : {
      bedrooms : 3,
      bathrooms :3,
      balconies:2,
      kitchens : 1,
      halls :1,
      otherrooms:1
  }
  }
  

function App() {
  
  return (
    <div className="App">
      <ModelCard model={MODEL_DEFAULT}/>
    </div>
  );
}

export default App;
