import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Wrap the Router with AuthProvider */}
        <Router>
          <Routes>
            {/* Define routes and their corresponding components */}
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;