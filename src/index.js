import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './Contex/AppContext';



ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
         <App />
    </AppProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

