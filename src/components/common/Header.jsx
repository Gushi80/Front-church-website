import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo 1.png"
import search from "../../assets/img/search.png"

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">
        <img class="logo1" src={logo} alt="" /> ASOMDWEE SOM
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="links" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="links" to="meet">
              Gatherings
            </Link>
          </li>
          <li class="nav-item">
            <Link class="links" to="event">
              Events
            </Link>
          </li>
          <li class="nav-item">
            <Link class="links" to="#">
              About Us
            </Link>
          </li>
          <li class="nav-item">
            <Link class="links" to="index">
              Contact Us
            </Link>
          </li>
        </ul>

        <div class="right">
          <img class="search" src={search} alt="" />
          <button class="donate">DONATE</button>
        </div>
      </div>
    </div>
  </nav>
  )
}
