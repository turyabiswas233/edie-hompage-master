import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import OurWorks from "./Components/OurWorks";
import Clients from "./Components/Clients";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <>
      {/* navbar links || menu-bar */}
      <Navbar />
      {/* body page */}
      <Home />
      <Services />
      <OurWorks />
      <Clients />
      <Contacts />
    </>
  );
}

export default App;
