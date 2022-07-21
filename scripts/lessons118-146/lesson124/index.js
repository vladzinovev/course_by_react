import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //инструмент для обновления потенциальных проблем в нашем приложении (доп проверки)
  <StrictMode>
    <App/>
  </StrictMode>
  
);


