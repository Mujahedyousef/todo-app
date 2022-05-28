import React, { useState, useContext } from "react";

import { LoginContext } from "../../context/auth";
import { When } from 'react-if';
import './signin.sass';
import Swal from 'sweetalert2';
export default function Signin() {
  const auth = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handelLogIn = (e) => {
    e.preventDefault();
    var x = document.getElementById("myInput").value;
    var y = document.getElementById("username").value;
    if ((x === "" || x === null) && (y === "" || y === null)) {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please check on the user name or password!!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
      return false;
    }
    auth.login(username, password);
  }


  const showPassword = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <>
      <When condition={!auth.registered}>
        <div class="container" style={{ width: "450px", marginTop: "60px", background: "#E5E8EB" }}>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            Sign In
          </h2>
          <form  >
            <div class="row">
              <div >
                <label for="username">User Name</label>
              </div>
              <div class="col-12">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter username.."
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="row">
              <div >
                <label for="password">Password</label>
              </div>
              <div class="col-12">
                <input
                  type="password"
                  name="password"
                  id="myInput"
                  placeholder="Enter password.."
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <div style={{ display: "flex" }}>
                  <span  ><input style={{
                    marginTop: "13px", width: "15px",
                    height: "15px", marginRight: "5px"
                  }} type="checkbox" onClick={showPassword} /></span>
                  <span><label style={{ fontWeight: "lighter" }}>Show Password</label></span>
                </div>
              </div>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button

                type="submit"
                class="btn btn-primary"
                onClick={handelLogIn}

              >
                Sign In
              </button>
            </div>
            <a href="/#" style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>Forgot your password?</a>
          </form>
          <hr />
          <label style={{ display: "flex", justifyContent: "center", color: "#1C6E42", marginLeft: "13px" }}>
            <button type="button" class="btn btn-success" onClick={auth.renderedForm} >Sign up</button>
          </label>
        </div>
      </When>

    </>
  );
}


