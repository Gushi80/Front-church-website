import React, {useState} from "react";
import "../assets/styles/join.css";
import logo from "../assets/img/logo 1.png";
import search from "../assets/img/./search.png";
const initalState={
  email:"",
  password:""
}
function Join() {
  const [credentials , setCredentials] = useState(initalState)
  const {email, password} = credentials
  const handleChange = (e)=>{
  setCredentials({...credentials, [e.target.name]:e.target.value})
  console.log(credentials)
  }
  return (
    <>
      

      <div class="wrapper">
        <div class="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div class="input-box">
              <span class="icon"></span>
              <ion-icon name="mail"></ion-icon>
              <input type="email" required placeholder="Email" name="email" value={email}  onChange={(e)=>handleChange(e)} />
             
            </div>
            <br />

            <div class="input-box">
              <span class="icon"></span>
              <ion-icon name="lock-closed"></ion-icon>
              <input type="password" required placeholder="Password" name="password" value={password}  onChange={(e)=>handleChange(e)} />
             
            </div>
            <div class="remember-forgot"> 
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="Submit" class="btn">
              Login
            </button>
            <div class="login-register">
              <p>
                Don't have an account?
                <a href="#" class="register-link">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
     
    </>
  );
}

export default Join;
