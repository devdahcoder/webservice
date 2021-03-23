import React, {useState} from "react"
import './App.css';

//imported Components
import Header from "./Components/Header/Header";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import DropDown from "./Components/DropDown/DropDown";

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
      <div className="app">
        {drop ? <DropDown /> : ""}

      </div>
      <MobileMenu onClickDrop={onClickDrop} />
    </>
  );
}

export default App;
