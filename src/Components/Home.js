import React from "react";
import heroimage from "./images/heroImage.jpg";
import "./styles/home.css";
function Home() {
  return (
    <div className="intro" id="home">
      <section className="intro-details">
        <div className="text">
          <p>Unhappy with your website?</p>
          <h3>We create beautiful and fast web services</h3>
        </div>
        <img src={heroimage} alt="heroImage" />
        <div className="text">
          <h3>Story, emotion and purpose</h3>
          <p>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
        </div>
      </section>
      <section className="intro-contact">
        <p>Want us to contact you?</p>
        <div>
          <input placeholder="email" type={"email"}/>
          <button type="submit">Join</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
