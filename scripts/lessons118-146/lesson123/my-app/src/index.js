import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';
/* 
const elem = <h2>Hello world!</h2>;
const elem = React.createElement('h2',null,'Hello world!');
const elem2 = React.createElement('h2',{className:'greetings'},'Hello world2!');

const element = {
  type:'h2',
  props:{
    className:'greeting',
    children:'Hello world!'
  }
};

const text="Hello world";
const elem3 =(
  <div>
    <h2 className='text'>Hello world!</h2>
    <h3>{text}</h3>
    <input type="text" />
    <label htmlFor=''></label>
    <button>Click</button>
    <button/>
  </div>
);
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);


