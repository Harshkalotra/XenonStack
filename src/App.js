import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from "../src/components/index";
import Registration from './components/registration';
import Home from "./components/home";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/registration" element={<Registration/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;