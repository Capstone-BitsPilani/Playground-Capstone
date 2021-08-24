
import ContactCard from "./components/Cards/ContactCard";

const CONTACTS_DEFAULT={
  type:"Police Station",
  name:"Perungudi police station",
  phone:
  [
        {
             type :"mobile",
             number: "830-340-3003",
             hours:"12 AM to 12 AM IST"
         },
         {
          type :"landline",
          number: "433-332-233",
          hours:"8 AM to 8 PM IST"
      }
                 
   ],
   emails:["rter@gmail.com"],
   address: {
          addressline: "Ramappa Nagar Kandancavadi",
          area: "Perungudi",
          city: "Chennai",
          state: "Tamil Nadu",
          pincode: "602001"
      }
  }

function App() {
  
  return (
    <div className="App">
      <ContactCard contactdetails={CONTACTS_DEFAULT} />
    </div>
  );
}

export default App;
