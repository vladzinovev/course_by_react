import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import reducer from './reducer';
import {inc, dec, rnd} from './actions';


const store = createStore(reducer);
const {dispatch, subscribe, getState} = store;

const update = () => {
    //document.getElementById('counter').textContent = store.getState().value;
    document.getElementById('counter').textContent = getState().value;
}

//subscribe выполняет действие после каждого измененения state
//store.subscribe(update);
subscribe(update);


/* сделали сами
const bindActionCreator=(creator,dispatch)=>(...args)=>{
    dispatch(creator(...args));
} 
const incDispatch=bindActionCreator(inc,dispatch);
const decDispatch=bindActionCreator(dec,dispatch);
const rndDispatch=bindActionCreator(rnd,dispatch);
*/

/* через паттерн
const incDispatch=bindActionCreators(inc,dispatch);
const decDispatch=bindActionCreators(dec,dispatch);
const rndDispatch=bindActionCreators(rnd,dispatch); */

//сокращение
const {incDispatch, decDispatch,rndDispatch }=bindActionCreators({
    incDispatch:inc,
    decDispatch:dec,
    rndDispatch:rnd
}, dispatch);

//было
/* document.getElementById('inc').addEventListener('click', () => {
    //store.dispatch(inc());
    dispatch(inc());
}); */
//стало
document.getElementById('inc').addEventListener('click', incDispatch);


document.getElementById('dec').addEventListener('click', decDispatch);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rndDispatch(value);
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    
    </>
  </React.StrictMode>
);