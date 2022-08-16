import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Onboarding from '../src/components/onboarding/Onboarding'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </div>
  );
}

export default App;
