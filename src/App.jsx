import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Staging from "./components/Staging";

function App() {
  const [numberOfBars, setNumberOfBars] = useState(15);
  const [bars, setBars] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        numberOfBars={numberOfBars}
        setNumberOfBars={setNumberOfBars}
        bars={bars}
        setBars={setBars}
      />
      <Staging numberOfBars={numberOfBars} bars={bars} setBars={setBars} />
      <Footer />
    </div>
  );
}

export default App;
