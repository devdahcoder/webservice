import React from "react"
import './App.css';

//imported Components
import Header from "./Components/Header/Header"
import MobileMenu from "./Components/MobileMenu/MobileMenu"


function App() {
  return (
    <div className="app">
      <Header />
      
      <MobileMenu />
    </div>
  );
}

export default App;
