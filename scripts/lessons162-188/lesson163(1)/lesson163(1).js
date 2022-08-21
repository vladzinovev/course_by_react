//основа
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter
        }
    }
    calc=(i)=>{
        if(this.state.counter<50){
            this.setState(state=>({
                counter:state.counter+i
            }))
        }
    }
    resetCounter=()=>{
          if(this.state.counter>-50){
              this.setState({
                  counter:this.props.counter
              })
          }
    }
    rndCounter=()=>{
        if(this.state.counter>-50){
            this.setState({
                counter:Math.floor(Math.random() * 100) + -50
            })
        }
    }
    render() {
        const {counter}=this.state;
        return (
            <div class="app">
            <div class="counter">{counter}</div>
            <div class="controls">
                <button onClick={()=>this.calc(1)}>INC</button>
                <button onClick={()=>this.calc(-1)}>DEC</button>
                <button onClick={this.rndCounter}>RND</button>
                <button onClick={this.resetCounter}>RESET</button>
            </div>
            </div>
        )
    }
}
ReactDOM.render(<App counter={0}/>, document.getElementById('app'));


//домашнее задание с хуками
const App = (props)=> {
  
    const [counter,setCounter]=React.useState(props.counter);
    function nextCounter(i){
      if(counter<10){
          setCounter(counter=>counter+i);
      }
    }
    function prevCounter(i){
      if(counter>-10){
          setCounter(counter=>counter+i);
      }
    }
    
      function rndCounter(){
              setCounter(counter=>Math.floor(Math.random() * 100) + -50)
      }
      function resetCounter(){
              setCounter(counter=>props.counter)
      }
      
  
        return (
          <div class="app">
            <div class="counter">{counter}</div>
            <div class="controls">
              <button onClick={()=>nextCounter(1)}>INC</button>
              <button onClick={() => prevCounter(-1)}>DEC</button>
              <button onClick={rndCounter}>RND</button>
              <button onClick={resetCounter}>RESET</button>
            </div>
          </div>
        )
      
  }
  ReactDOM.render(<App counter={0}/>, document.getElementById('app'));
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов