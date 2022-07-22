
import './App.css';

function WhoAmI(props){
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}




function App() {
  return (
    <div className="App">
      <WhoAmI name="john" surname="Smith" link="facebook"/>
    </div>
  );
}

export default App;
