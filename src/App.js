import "./App.css";
import DigitalLibrary from "./Projects/Library/DigitalLibrary";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DigitalLibrary />
      </BrowserRouter>
    </div>
  );
}

export default App;
