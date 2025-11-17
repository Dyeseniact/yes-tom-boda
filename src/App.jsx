// src/App.jsx
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Confirmation,
  Schedule,
  Home,
  Navbar,
  StarsCanvas,
  Location,
  Information,
  Gifts,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">

        {/* NAVBAR SIEMPRE ARRIBA, FUERA DEL HERO */}
        <Navbar />

        {/* HERO CON VIDEO */}
        <div className="bg-home-pattern bg-cover bg-no-repeat bg-center">
          <Home />
        </div>

        {/* SECCIONES */}
        <div className="relative z-0">
        <About />
         <StarsCanvas />
        </div>
        <div className="relative z-0">
        <Schedule />
         <StarsCanvas />
        </div>
        <div className="relative z-0">
        <Location />
        <StarsCanvas />
        </div>

        <div className="relative z-0">
        <Gifts />
        <StarsCanvas />
        </div>
        
        <div className="relative z-0">
        <Information />
        <StarsCanvas />
        </div>
        

        <div className="relative z-0">
          <Confirmation />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
