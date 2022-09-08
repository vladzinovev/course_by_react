import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import reducer from './reducer';
import {inc, dec, rnd} from './actions';
import { Provider } from 'react-redux';


const store = createStore(reducer);
const {dispatch, subscribe, getState} = store;

/* const update = () => {} */

//subscribe выполняет действие после каждого измененения state

subscribe(update);



const {incDispatch, decDispatch,rndDispatch }=bindActionCreators({
    incDispatch:inc,
    decDispatch:dec,
    rndDispatch:rnd
}, dispatch);


document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click', decDispatch);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rndDispatch(value);
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter
        counter={getState().value}
        inc={incDispatch}
        dec={decDispatch}
        rnd={()=>{
            const value = Math.floor(Math.random() * 10);
            rndDispatch(value);
        }}
    /> */}
    <Provider store={store}>
        <App/>
    </Provider>
    
  </React.StrictMode>
);