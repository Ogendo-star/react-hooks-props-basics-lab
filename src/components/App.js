import React from "react";
import user from "../data/user";

import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home name={user.name} city={user.city} color= {user.color} />
      <About 
        bio={user.bio} 
        github={user.links.github} 
        linkedin={user.links.linkedin} 
      />
    </div>
  );
}

export default App;
