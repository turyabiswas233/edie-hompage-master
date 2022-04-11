import React from "react";
function Navbarbtn() {
  return (
    <div className="nav_bottom" style={{marginBottom:'4rem'}}>
      <nav>
      <ul>
          {/* home section */}
          <li >
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#our_works">Our Works</a>
          </li>

          <li>
            <a href="#clients">Clients</a>
          </li>

          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbarbtn;
