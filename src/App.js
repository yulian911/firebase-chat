import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes,Navigate } from "react-router-dom";
import SignUp from './Pages/SignUp/SignUp'
import Navigation from './Conponents/Navigation';
import PrivateRoute from './Conponents/PrivateRoute';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navigation/>
          <Routes>
              <Route  path='/login' element={<Login/>}/>
              <Route  path='/signup' element={<SignUp/>}/>
              <Route path="/private" element={
                <PrivateRoute>
                      <Home/>
                </PrivateRoute>
              } />
          </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
