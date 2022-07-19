import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//const elem = <h2>Hello world!</h2>;
const elem = React.createElement('h2',null,'Hello world!');
const elem2 = React.createElement('h2',{className:'greetings'},'Hello world2!');

const element = {
  type:'h2',
  props:{
    className:'greeting',
    children:'Hello world!'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
  elem2,
  element
);


