//1 Внутри какого метода жизненного цикла можно делать запросы на сервер?
//в любом из них

//2 Что не вызывает обновление компонента?
//вызов componentDidUpdate()

//3  Библиотека propTypes позволяет проверять свойства на то, что...
//все вышеперечисленное

//4  Почему нельзя забывать про аргументы prevProps и prevState в хуке жизненного цикла componentDidUpdate() ?
//Если не сравнивать приходящие новые данные со старыми, то можно получить бесконечный цикл или лишние действия

//5  Как правильно импортировать и использовать изображение в компоненте?
//import img form 'somepic.jpg';
//<img src={img}/>

//6 В чем разница между componentDidCatch() и static getDerivedStateFromError() ?
//componentDidCatch позволяет

//7 Почему этот код будет давать ошибку?

import PropTypes from 'prop-types';
 
class Greeting extends React.Component {
  render() {
    return (
      <h1>Привет, {props.name}</h1>
    );
  }
}
 
Greeting.defaultProps = {
  name: 'Незнакомец'
};
//пропущен контекст вызова при спользовании свойства name

//8  Прием props.children позволяет в родительском компоненте...
//вставлять любые элементы или компоненты. при этом есть возможность

//9
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }
 
  tick() {this.setState({date: new Date()});}
 
  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}   
//нет хука componentWillUnmount, который бы остановил

//10 В чем разница между приемом с props.children и render props?
//props.children

//11 Что такое ref?
//это ссылк ана элемент в dom дереве

//12 Порталы нужны для того, чтобы  
//рендерить определенные компоненты в место, которое находится вне dom иерархии

//13  Почему данный код выдаст ошибку? (Для 17й версии реакта, на ReactDOM.render не обращаем внимания)
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');
 
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
 
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
 
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
 
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);}
}
 
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick() {    
      this.setState(state => ({      clicks: state.clicks + 1    }));  }
 
  render() {
    return (
      <div onClick={this.handleClick}>        
         <p>Количество кликов: {this.state.clicks}</p>
        <Modal>          
           <Child />
        </Modal> 
      </div>
      <p>
          Откройте DevTools браузера,
          чтобы убедиться, что кнопка
          не является потомком блока div
          c обработчиком onClick.
      </p>
    );
  }
}
 
function Child() {
    return (
        <div className="modal">
           <button>Кликните</button>    
        </div>
  );
}
 
ReactDOM.render(<Parent />, appRoot);
//компонент parent возвращает неправильный формат верстки в jsx

//14  Какая ошибка допущена в этом коде?
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
   
      this.inputRef = React.createRef();  
    }
   
    render() {
      return <input type="text" ref={this.inputRef} />;  }
   
    componentDidMount() {
      this.inputRef.current.focus();  }
}
//ошибое нет


