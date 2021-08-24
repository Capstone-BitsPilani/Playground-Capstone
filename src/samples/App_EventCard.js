import EventCard from "./components/Cards/EventCard";
//title:"Shrimp and Chorizo Paella",
function App() {
  const DEFAULT_EVENT={
    title:"Reptile",
    subheader:"September 14, 2021",
    image:"https://images.unsplash.com/photo-1524397157121-8810cb7f9a52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29udGVtcGxhdGl2ZSUyMHJlcHRpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imagetitle:"Paella dish",
    description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    }
  return (
    <div className="App">
      <EventCard event={DEFAULT_EVENT} />
    </div>
  );
}

export default App;
