import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/ToDo.png";
import G from "./assets/Group1.png";
import { Link } from "react-router-dom";

function App() {
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    "Hello this is my first Todo",
    "Hello this is my second Todo.",
    "Hello this is my 3th Todo.",
  ]);
  useEffect(() => {
    setTotal(list.length);
  }, [list]);

  const addto = () => {
    if (value === "") {
      return;
    }
    setList([...list, value]);
    setValue("");
  };
  const removefrom = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="content">
            <img src={logo} alt="To-Do Logo" />
            <div className="side">
              <Link to="/" style={{ color: "#0000ff" }}>
                Home
              </Link>
              <Link
                to="/about"
                className="margL-20"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="container">
          <div>
            <h1 style={{ marginTop: "40px" }}>Simple ToDo App</h1>
            <p style={{ color: "#666666", marginTop: "2px" }}>
              This todo app for test design.
            </p>
          </div>
          <div className="keys">
            <input
              className="ins"
              type="text"
              placeholder="Write Text here . . ."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="btn1" onClick={addto} style={{ color: "white" }}>
              + Add New
            </button>
          </div>
          <div className="line"></div>
          <div className="content1">
            <div className="box">
              {list.map((el, index) => (
                <div key={index} className="p1">
                  {el}
                  <button className="cls-btn" onClick={() => removefrom(index)}>
                    <img src={G} style={{ marginTop: "5px" }} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <p className="p2">
            Total List :{" "}
            <span style={{ fontWeight: "bold", color: "black" }} id="count">
              {total}
            </span>
          </p>
          <button className="btn2" onClick={addto} style={{ color: "white" }}>
            + Add New
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
