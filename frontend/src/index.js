/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './Context';
import Context1 from './Context1';

ReactDOM.render(
  // <React.StrictMode>
  <Context >
    <Context1 >
      <App />
    </Context1>
  </Context>,
  // </React.StrictMode>,
  document.getElementById('root')
);
