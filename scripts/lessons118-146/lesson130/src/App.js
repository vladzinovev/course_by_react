import { Component } from 'react';
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
/* 
function WhoAmI({name,surname,link}){
  return (
    <div>
      <h1>My name is {name.firstName}, surname - {surname()}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}
*/

class WhoAmI extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {name,surname,link}=this.props;
    return (
      <div>
        <h1>My name is {name}, surname - {surname}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name='John' surname='Smith' link="facebook.com"/>
      <WhoAmI name='Alex' surname='Smith'link="vk.com"/>
    </div>
  );
}

export default App;
