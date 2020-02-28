import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";

import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";

import LocationsList from "./components/LocationsList.js";
import LocationCard from "./components/LocationCard.js";



import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import "./index.css";

export default function App() {
  return (
    <div>
      <nav className="main-nav">
        <h1 className="morty-header">
          Rick and Morty
        </h1>
            <div className="nav-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/characters">Characters</NavLink>
              <NavLink to="/locations">Locations</NavLink>
            </div>
      </nav>

      {/* <main>
        <Header />
      </main> */}
        
        
          <div>
            <Route exact path="/">
              <WelcomePage/>
            </Route>
            <Route exact path="/characters">
              <CharacterList/>
            </Route>
            <Route path="/CharacterCard/:id">
              <CharacterCard/>
            </Route>
            <Route path="/locations/">
              <LocationsList/>
            </Route>
            <Route path="/Locations/:id">
              <LocationCard/>
            </Route>
          </div>
    </div>  
  );
}












