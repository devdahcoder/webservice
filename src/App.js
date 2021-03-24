import React, {useState} from "react"
import './App.css';

//imported Components
import Header from "./Components/Header/Header";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import DropDown from "./Components/DropDown/DropDown";
import Home from "./Pages/Home/Home";

function App() {

  const [drop, setDrop] = useState(false);


  const onClickDrop = () => {
      if (drop === false) {
          setDrop(true);
      }
      else {
          setDrop(false);
      }
  }

  return (
    <>
      <Header />
      <main className="app">
        {drop ? <DropDown /> : ""}
        <Home />
      </main>
      <MobileMenu onClickDrop={onClickDrop} />
    </>
  );
}

export default App;
