import React from "react";
import Navbar from "./Components/Navbar";
import ParentComponent from './Components/ParentComponent';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import SamplePage from "./Components/Samplemodal";
function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
        <div style={{ paddingTop: "30px" }}>
          <Routes>
            <Route path="/" element={<ParentComponent />} />
            <Route path="modal" element={<SamplePage />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
