import React, { useState } from "react";
import Button from "./button";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  const onReset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      {/*change the color of text depending if number is positive or negative */}
      <h2 style={{ color: count > 0 ? "green" : count < 0 ? "red" : "black" }}>
        <span style={{fontSize: "100px"}}>{count}</span>
      </h2>
      <Button name={"increase"} onClick={onIncrease} />
      <Button name={"decrease"} onClick={onDecrease} />
      <Button name={"reset"} onClick={onReset} />
    </div>
  );
}
