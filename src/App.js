import React, {useState} from "react"
import './App.css';

//imported Components
import Header from "./Components/Header/Header";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import DropDown from "./Components/DropDown/DropDown";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile"

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
    <div className="app">
      <Header />
      {drop ? <DropDown /> : ""}
      <main>
        
        <div className="main-container">
          <Home />
          {/* <Profile /> */}
        </div>
      </main>


      <MobileMenu onClickDrop={onClickDrop} />
    </div>
  );
}

export default App;
