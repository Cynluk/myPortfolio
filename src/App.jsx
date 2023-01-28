import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";

import background from "./assets/background.jpg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="Background"
      //style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "contain",
      //   backgroundSize: "cover",
      //   height: "55vw",
      //   width: "230vh",

      //   filter: "blur(2.5px)",
      // }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/contact" element={<ContactMe />} />
        {/* <Route path="/projects" element={<MyProjects />} /> */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
