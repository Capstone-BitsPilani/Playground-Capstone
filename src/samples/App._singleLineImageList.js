
import SingleLineImageList from "./components/Images/MultiLineImageList";


const DEFAULT_IMAGES = [
  {
  img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1vYmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  title: 'Image'
  },
  {
    img: "https://images.unsplash.com/photo-1603210119709-26103832d0e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: 'Image'
    },
  {
      img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1vYmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: 'Image'

  },
      {
        img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1vYmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: 'Image'
        },
        {
          img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1vYmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          title: 'Image'
          },
  ]
function App() {
  
  return (
    <div className="App">
      <SingleLineImageList images={DEFAULT_IMAGES}/>
    </div>
  );
}

export default App;
