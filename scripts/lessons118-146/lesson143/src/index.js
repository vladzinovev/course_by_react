import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Button} from './App'
import styled from 'styled-components';

const BigButton=styled(Button)`
  margin:0 auto;
  width:245px;

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Button>+++</Button>
  </React.StrictMode>
);

