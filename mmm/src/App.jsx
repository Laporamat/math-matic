import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [a, setA] = useState("10");
  const [b, setB] = useState("2");
  const [c, setC] = useState("0");

  const aAddB = async () => {
    try {
      const response = await axios.post("http://localhost:3000/aAddB", {
        a: parseFloat(a),
        b: parseFloat(b),
      });
      setC(response.data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const aSquarePlusBSquare = async () => {
    const result = parseFloat(a) ** 2 + parseFloat(b) ** 2;
    setC(result);

    try {
      const response = await axios.post("http://localhost:3000/a2AddB2", {
        a: parseFloat(a),
        b: parseFloat(b),
      });
      setC(response.data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const aPowerB = async () => {
    const result = parseFloat(a) ** parseFloat(b);
    setC(result);

    try {
      const response = await axios.post("http://localhost:3000/aPowB", {
        a: parseFloat(a),
        b: parseFloat(b),
      });
      setC(response.data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Math</h1>
      <div className="input-container">
        <label>a:</label>
        <input type="text" value={a} onChange={(e) => setA(e.target.value)} />
        <label>b:</label>
        <input type="text" value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div className="button-container">
        <button onClick={aAddB}>c = a + b</button>
        <button onClick={aSquarePlusBSquare}>c = a² + b²</button>
        <button onClick={aPowerB}>c = aᵇ</button>
      </div>
      <div className="result-container">
        <label>c:</label>
        <input type="text" value={c} readOnly />
      </div>
    </div>
  );
}

export default App;
