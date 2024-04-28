import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './hooks/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ToastContainer theme='colored'/>
      <GlobalStyles/>
        <Login/>
    </UserProvider>
  </React.StrictMode>,
);
