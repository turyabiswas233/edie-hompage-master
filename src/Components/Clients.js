import React from "react";
import "./styles/client.css";
import prs1 from "./images/person1.png";
import prs2 from "./images/person2.png";
import prs3 from "./images/person3.png";
import prs4 from "./images/person4.png";

function Clients() {
  return (
    <div className="client" id="clients">
      <section className="client-left-side top-side">
        <div className="left-side">
          <p>Meet the team</p>
          <h3>We are chilled and a laidback team</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <section className="person_images">
          <img src={prs3} />
          <div>
            <img className="prs_1" src={prs1} />
            <img src={prs2} />
          </div>
        </section>
      </section>
      <div className="details bottom-side">
        <h2>
          "Fast and outstanding resutls. Edie understands their customer’s
          needs. They have a young and talented team."
        </h2>
        <div className="client_details">
          <img src={prs4} />
          <div>
            <p>Carlos Tran</p>
            <p>The Decorate Gatsby</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
