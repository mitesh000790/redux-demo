import React from "react";
import './App.css';
import NavBar  from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";

function App() {
  return (
    <div className="App">
       <NavBar />
        <Routing/>
    </div>
  );
}

export default App;
