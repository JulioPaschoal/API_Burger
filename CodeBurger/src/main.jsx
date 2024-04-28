import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import GlobalStyles from './styles/globalStyles';
import Register from './pages/Regiter';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer theme='colored'/>
    <GlobalStyles/>
    <Login/>
  </React.StrictMode>,
);
