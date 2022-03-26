
import "./App.css";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Navigation from "./Conponents/Navigation";
import PrivateRoute from "./Conponents/PrivateRoute";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { useApp } from "./Contex/AppContext";
import PublicRoute from "./Conponents/PublicRoute";
import Profile from "./Pages/Profile/Profile";

function App() {
  const { authIsReady } = useApp();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navigation />
  
          <Routes>
            <Route
              exact
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
    
         
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
