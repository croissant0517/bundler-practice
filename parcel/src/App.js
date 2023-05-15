import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "./App.scss";

function App() {
  const [state, setState] = useState([]);

  const handleClick = () => {
    console.log("Hello world!");
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  return (
    <h1 className="main">
      <div>Hello world!</div>
      <div className="title">Hi!</div>
      <Button variant="contained" onClick={handleClick}>
        Hello World
      </Button>
      {state.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </h1>
  );
}

export default App;
