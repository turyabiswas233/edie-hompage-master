import React from "react";
import "./styles/footer.css";
import Navbarbtn from "./Navbarbtn";
import instagram from "./images/svg/instagram.svg";
import linkedin from "./images/svg/linkedin.svg";
import twitter from "./images/svg/twitter.svg";

function Contacts() {
  return (
    <div className="contact" id="contacts">
      <div className="footer-top">
        <Navbarbtn />
        <div className="edie" style={{marginBottom:'4rem'}}>
          <h1>Edie</h1>
          <section className="icons">
            <img src={instagram} />
            <img src={linkedin} />
            <img src={twitter} />
          </section>
        </div>
        <div className="footer-contact">
          <p>Want us to contact you?</p>
          <div>
            <input placeholder="email" type={"email"} />
            <button type="submit">Join</button>
          </div>
        </div>
      </div>
      <p align="center" className="my_info">
        created by <a href="https://github.com/turyabiswas233">turyabiswas233</a> - devChallenges.io
      </p>
    </div>
  );
}

export default Contacts;
