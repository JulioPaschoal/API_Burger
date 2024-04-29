import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './hooks/UserContext';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ToastContainer theme='colored'/>
      <GlobalStyles/>
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
);
