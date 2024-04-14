import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './pages/login'
import GlobalStyles from './styles/globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Login />
  </React.StrictMode>,
)
