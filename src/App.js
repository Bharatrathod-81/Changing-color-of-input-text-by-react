import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  var [show, setshow] = useState("");
  var [raw, setraw] = useState("");

  function change(event) {
    setshow(event.target.value);
  }
  function click1(color) {
    setraw(color);
  }
  return (
    <div className="App">
      <input onChange={change}></input>
      <button onClick={() => click1("red")}>red</button>
      <button onClick={() => click1("blue")}>blue</button>
      <button onClick={() => click1("green")}>green</button>
      <p style={{ color: raw }}>{show}</p>
    </div>
  );
}
