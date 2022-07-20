import logo from './logo.svg';
import './App.css';

//создали react компонент
const Header =()=>{
  return <h2>Hello world!</h2>
}

const Field=()=>{
  return <input placeholder="Type here" typ="text"/>
}
function Btn(){
  const text ='Log in';
  return <button>{text}</button>

  //const p =<p>Log in</p>
  //return <button>{p}</button>

  /* 
  const res = ()=>{
    return 'Log in'
  }
  return <button>{res()}</button> 
  */
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
