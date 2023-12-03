
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import WordDetails from './components/WordDetails';
import '../src/App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/word/:word" element={<WordDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
