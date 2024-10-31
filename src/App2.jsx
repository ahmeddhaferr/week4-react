import React from "react";
import "./App2.css";
import img1 from "./assets/undraw_to_do_list_re_9nt7 1.png";
import { Link } from "react-router-dom";
import logo from "./assets/ToDo.png";


function App2() {
  return (
    <>
      <header>
        <div className="container">
          <div className="content">
            <img src={logo} alt="" />
            <div>
              <Link to = "/" className="p">
                Home
              </Link>
              <Link to ="/About" className="pp1" id="x">
                About
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="main">
        <div className="container">
          <div className="sp">
            <h1>Welcome .</h1>
            <p className="p2">This is my first challenge with Html&CSS.</p>
          </div>

          <img src={img1} />
          <div className="p3 , sp1">
            <p>
              This app created by <span>Aon2023</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App2;
