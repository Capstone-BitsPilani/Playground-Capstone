import MyAdCard from "./components/Cards/MyAdCard";

const DATA={
  communityid : "612bf9c96b1331634c3a701c",
  creator:"612c91d365c8849674f699ec",
  title: "Maruti Swift Dzire",
  description: "Second hand car for sale",
  category: "Autos",
  subcategory:"Cars",
  type:"private",
  thumbnail:"https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  price:{
      value:"Rs 300000",
      
      negotiable:true
  },
  activatedat:"24 MAR 2021",
  expireat:"24 APR 2021"
}
function App() {
  
  return (
    <>
    <MyAdCard advert={DATA} />
    <MyAdCard advert={DATA} />
    <MyAdCard advert={DATA} />
    <MyAdCard advert={DATA} />
    </>
  );
}

export default App;
