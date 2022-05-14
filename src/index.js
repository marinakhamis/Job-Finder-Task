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


// BONUS: Supporting RTL
// just change "ltr" to "rtl" and it'll work
document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");
