import EventCard from "./components/Cards/EventCard";
import SellItemCard from "./components/Cards/SellItemCard";
//title:"Shrimp and Chorizo Paella",
const ITEM_DEFAULT=
{
 image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vYmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
 imagetitle:"mobile",
 price:"13,000",
 description:"Lg g8 x thin q"
}
function App() {
  
  return (
    <div className="App">
     <SellItemCard item={ITEM_DEFAULT}/>
    </div>
  );
}

export default App;
