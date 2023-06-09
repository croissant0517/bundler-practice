import { Button } from "@mui/material";
import "./App.scss";

function App() {
  const handleClick = () => {
    console.log("Hello world!");
  };

  return (
    <h1 className="main">
      <div>Hello world!</div>
      <div className="title">Hi!</div>
      <Button variant="contained" onClick={handleClick}>
        Hello
      </Button>
    </h1>
  );
}

export default App;
