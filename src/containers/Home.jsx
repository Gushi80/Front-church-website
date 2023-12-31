import React from "react";
import "../assets/styles/church.css";
import logo from "../assets/img/logo 1.png";
import mama from "../assets/img/mama.jpg";
import search from "../assets/img/./search.png";
import max from "../assets/img/maxresdefault.jpg";
import tafo from "../assets/img/tafos.jpg";
import somafo from "../assets/img/somafo.jpg";
import { Link } from "react-router-dom";


function Home() {
  
  return (
    <>


      <div class="container">
        <div class="gradient"></div>
        <img class="step" src={max} alt="man in white" />
        <h2>ASOMDWEE NTONTOM SOM DIASPORA</h2>
        <Link to="/login">
<button>Login</button>

        </Link>
        
      </div>

      <article>
        <div class="common">
          <p>
            Welcome to church 😀.
            <br />
            Asomdwee ntontom som is an authentic church in Ghana for everyday
            people of all ages, cultures and backgrounds. Whoever you are and
            wherever you've been, you're welcome to join us to connect, be
            inspired and grow through Jesus and a genuine sense of belonging.
          </p>
          <img class="mama" src={mama} />
        </div>

        <div class="opinion">
          <img src={tafo} id="tafos" />
        </div>
        <div class="middle">
          <h1>
            "THE MISSION IS TO INVITE AND THE
            <br />
            COMMAND IS TO LOVE"
          </h1>
          <img class="praise" src={somafo} />
          <h5>Nyame Somafo Yawoh</h5>
          <h5>Asomdwee Som Pastor</h5>
        </div>
      </article>
   
    </>
  );
}

export default Home;
