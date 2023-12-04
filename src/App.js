import "./App.css";
import Home from "./Components/Home";
import {Routes, Route} from "react-router-dom";
import ModeloIFC from "./Components/ModeloIFC";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modeloifc" element={<ModeloIFC />} />
      </Routes>
    </div>
  );
}

export default App;
