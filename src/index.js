import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Chức năng là đọc từ Login gán vào root để chuyển dữ liệu sang indexedDB.html qua id=root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('slide-show')
);

reportWebVitals();
