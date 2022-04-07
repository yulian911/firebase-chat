import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navigation from "./Conponents/Navigation";

import { useApp } from "./Contex/AppContext";

import AnimatedRoutes from "./Conponents/AnimatedRoutes";

function App() {
  const { authIsReady } = useApp();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navigation />
          <AnimatedRoutes />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
