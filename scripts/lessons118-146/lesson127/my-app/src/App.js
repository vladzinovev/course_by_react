
import './App.css';
/* 
function WhoAmI(props){
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}
*/

function WhoAmI({name,surname,link}){
  return (
    <div>
      <h1>My name is {name.firstName}, surname - {surname()}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={{firstName:'John'}} surname={()=>{return 'Smith'}} link="facebook.com"/>
      <WhoAmI name={{firstName:'Alex'}} surname={()=>{return 'Smith'}} link="vk.com"/>
    </div>
  );
}

export default App;
