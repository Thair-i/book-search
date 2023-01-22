import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.BrowserRouter>
    <App />
  </React.BrowserRouter>,
  document.getElementById('root')
);