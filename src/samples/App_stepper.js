
import Menu from "./components/Menu/Menu";
import SimpleStepper from "./components/Stepper/SimpleStepper";
const STEPPER_DEFAULT=[
  {title:'Community',
   content:'Community Details'},
  {title:'Apartment Models',
   content:'Apartment Models'},
  {title:'Blocks',
   content:'Blocks'},
  {title:'Apartments',
   content:'Apartments'},
  {title:'Facilties',
   content:'Facilities'}
  ]
function App() {
  
  return (
  <SimpleStepper stepperInfo={STEPPER_DEFAULT} />
  )
}

export default App;
