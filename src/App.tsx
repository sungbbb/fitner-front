import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Survey from "./Pages/Survey";
import Admin from "./Pages/Admin";
import { Cert, Confirm, Info } from "./Pages/Cert";
import Find from "./Pages/Find";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/find/*" element={<Find />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/cert" element={<Cert />} />
        <Route path="/info" element={<Info />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
