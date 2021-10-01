
import BillDetailsCard from "./components/Cards/BillDetailsCard";

const BILL_DEFAULT={
  communityname:"jamuana Landmark Apt",
  aptnum:"A101",
  amt:1200,
  period:"08-2021",
  category:"maintenance",
  dueat:"2021-09-29T22:06:30.000Z"
  
  }

function App() {
  
  return (
    <div className="App">
      <BillDetailsCard billdetails={BILL_DEFAULT} />
    </div>
  );
}

export default App;
