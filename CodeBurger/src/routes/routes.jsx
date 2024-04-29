import {Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/Regiter';
import Home from '../pages/home';

// COMPONENTE DE RORAS \\
function MainRoutes() {

  return (
    <Routes>
      <Route exact path='/' element={< Home />}/>
      <Route path="/login" element={< Login />}/>
      <Route path="/cadastro" element={< Register />}/>
    </Routes>
  )
}

export default MainRoutes;
