import React from "react";
import "../assets/styles/style.css";
import logo from "../assets/img/logo 1.png"
import search from "../assets/img/./search.png"
import subject from "../assets/img/Subject.png"

function Index() {
  return (
    <>
      
      <section>
        <div class="contact">
          <h2>Third temple builders Alliance</h2>
          <img class="Subject" src={subject} />
        </div>
        <div class="fill">
          <h3>CONNECT WITH US</h3>
          <p>
            Fill out the optional form below to let us know when you’re dropping
            by, and if there’s anything we can do to make your visit even more
            enjoyable.
          </p>
          <form action="#">
            <label for="name"></label>
            <input type="text" id="name" placeholder="Name" required />
            <br />
            <label for="Email"></label>
            <br />
            <input type="text" id="People" placeholder="Email" required />
            <br />
            <label for="phone"></label>
            <br />
            <input type="text" id="phone" placeholder="phone" required />
            <br />
            <label for="date"></label>
            <br />
            <input type="date" id="date" name="date" />
            <br />
            <label for="special"></label>
            <br />
            <input type="text" id="special" placeholder="Message\Comment" />
            <br />
            <button type="submit" class="send">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

    </>
  );
}

export default Index;
