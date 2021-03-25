import React, {useState} from "react"
import './App.css';

//imported Components
import Header from "./Components/Header/Header";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import DropDown from "./Components/DropDown/DropDown";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import News from "./Pages/News/News";
import Faq from "./Pages/Faq/Faq";
import Help from "./Pages/Help/Help";

//imported libraries
import { Switch } from "react-router";
import { Route } from 'react-router-dom';

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
          <Switch>
            {/* <Home /> */}
            {/* <Profile /> */}

            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} />
            <Route path="/news" component={News} />
            <Route path="/faq" component={Faq} />
            <Route path="/help" component={Help} />
          </Switch>
            
        </div>
      </main>


      <MobileMenu onClickDrop={onClickDrop} />
    </div>
  );
}

export default App;
