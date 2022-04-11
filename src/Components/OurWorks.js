import React from "react";
import smartHome from "./images/smarthome.jpg";
import onboard from "./images/onboard.png";
import book from "./images/booking.png";
import juice from "./images/juice-product.png";
import "./styles/ourwork.css";
import { ArrowRightAlt } from "@mui/icons-material";
function OurWorks() {
  return (
    <div className="works" id="our_works">
      <h2>
        Good design <wbr />
        means good business
      </h2>
      <div className="grid-box">
        <div>
          <img src={smartHome} />
          <p>Full stack application</p>
          <h3>Smart home dashboard</h3>
        </div>

        <div>
          <img src={onboard} />
          <p>UX/UI design</p>
          <h3>Onboard application</h3>
        </div>
        <div>
          <img src={book} />
          <p>Mobile application</p>
          <h3>Booking system</h3>
        </div>
        <div>
          <img src={juice} />
          <p>Front End application</p>
          <h3>Juice product homepage</h3>
        </div>
        <span className="see_more">
          see more <ArrowRightAlt style={{paddingLeft:'5pt'}}/>
        </span>
      </div>
    </div>
  );
}

export default OurWorks;
