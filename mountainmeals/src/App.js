import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';


import './App.css';
// App.js

import Home from './pages/Home';
import About from './pages/About';
// Import other pages as needed
import CreatePlan from './pages/CreatePlan';
import Help from './pages/Help';
import Map from './pages/Map';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-plan" element={<CreatePlan />} />
        <Route path="/help" element={<Help />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
