import logo from './logo.svg';
import './App.css';

//создали react компонент
const Header =()=>{
  return <h2>Hello world!</h2>
}

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
