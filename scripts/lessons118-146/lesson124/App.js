import {Component,StrictMode} from 'react';
import './App.css';

//создали react компонент
const Header =()=>{
  return <h2>Hello world!</h2>
}

const Field=()=>{
  const styleField={
    width:'300px'
  }
  return <input 
          placeholder="Type here" 
          type="text" 
          style={styleField}/>
}
class Field extends React.Component{
  render(){
    const styleField={
      width:'300px'
    }
    return <input 
            placeholder="Type here" 
            type="text" 
            style={styleField}/>
  }
}




function Btn(){
  const text ='Log in';
  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>

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
      <StrictMode>
        <Header/>
      </StrictMode>
      
      <Field/>
      <Btn/>
    </div>
  );
}
export {Header};
export default App;
