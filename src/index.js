import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css'
import 'normalize.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
