
import React, { useState } from "react";
import { useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../../context/auth";
import "./signup.sass";
import Swal from 'sweetalert2';
export default function Signup() {
  const auth = useContext(LoginContext);
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "user",
  });

  const handelChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {

    e.preventDefault();
    var x = document.getElementById("myInput").value;
    var y = document.getElementById("username").value;
    if ((x === "" || x === null) && (y === "" || y === null)) {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
      return false;
    }

    auth.signup(user);
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
      <When condition={auth.registered}>
        <div class="container" style={{ width: "500px", marginTop: "70px", background: "#E5E8EB" }}>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            Sign Up
          </h2>
          <form onSubmit={handelSubmit} >
            <div class="row">
              <div class="col-25">
                <label for="username">User Name</label>
              </div>
              <div class="col-12">
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Your username.."
                  onChange={handelChange}
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="password">Password</label>
              </div>
              <div class="col-12">
                <input
                  type="password"
                  name="password"
                  id="myInput"
                  placeholder="Your password.."
                  onChange={handelChange}
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
            <div class="row">
              <div class="col-25">
                <label for="role">Role</label>
              </div>
              <div class="col-12">
                <select id="role" name="role" onChange={handelChange}>
                  <option value="user">user</option>

                  <option value="admin">admin</option>
                </select>
              </div>
            </div>

            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handelSubmit}>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </When>
    </>
  );
}
