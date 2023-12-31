import React from 'react'

function Footer() {
  return (
    <footer>
    <div class="footerContainer">
      <div class="socialIcons">
        <a href="">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div class="footerNav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us </a>
          </li>
          <li>
            <a href="index.html">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="footerBottom">
        <p>
          Copyright &copy;2023; Designed by
          <span class="Designer">Fadila</span>
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer