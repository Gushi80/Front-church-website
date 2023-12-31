import React from "react";
import "../assets/styles/events.css";
import logo from "../assets/img/logo 1.png";
import search from "../assets/img/./search.png";
import leader from "../assets/img/leader.jpg";
import whatsapp from "../assets/img/whatsapp.jpeg";
import sapp from "../assets/img/sapp.jpg";
import praise from "../assets/img/somafo.jpg";

function Event() {
  return (
    <>
     

      <div class="container">
        <img class="step" src={leader} alt="man in white" />
      </div>

      <article>
        <div class="common">
          <p>
            Join us for church this Sunday and check out our broad range of
            ministries for opportunities to connect, get involved and make a
            difference.
          </p>
          <img class="mama" src={whatsapp} />
        </div>

        <div class="opinion">
          <img src={sapp} id="tafos" />
        </div>
        <div class="middle">
          <h1>
            "THE MISSION IS TO SPREAD THE THIRD TEMPLE
            <br />
            ALL OVER THE WORLD"
          </h1>
          <img class="praise" src= {praise} />
          <h5>Nyame Somafo Yawoh</h5>
          <h5>Asomdwee Som Pastor</h5>
        </div>
      </article>
      
    </>
  );
}

export default Event;
