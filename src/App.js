import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Onboarding from '../src/components/onboarding/Onboarding';
import Dashboard from "../src/components/dashboard/parentScreen/ParentScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
