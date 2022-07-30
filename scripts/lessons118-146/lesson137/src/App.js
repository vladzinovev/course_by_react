import { Component,Fragment } from 'react';
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
    this.state={
      years:27,
      text:"+++",
      position:''
    }
  }


/*nextYear(){
  }
  <button onClick={()=>this.nextYear()}>{text}</button>*/

  nextYear=()=>{
    /* 
    this.setState({
      years: this.state.years +1
    }) */
    // в даннном случае каждый следующий вызов будет ждать предыдущий
    this.setState(state=>({
      years: state.years +1
    }))

  }
  commitInputChanges=(e,color)=>{
    console.log(color);
    this.setState({
      position:e.target.value
    })
  }
  render(){
    const {name,surname,link}=this.props;
    const {position, years}=this.state;
    return (
      //с помощью Fragmen мы избавились от ненужного div
      <Fragment>
        <button onClick={this.nextYear}>{text}</button>
        <h1>My name is {name}, 
            surname - {surname}, 
            age ={years}, 
            position-{position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e)=>this.commitInputChanges(e, 'red')}></input>
        </form>
      </Fragment>
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
