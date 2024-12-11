import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Info from './pages/Info';
import { SliderProvider } from './context/SliderContext';
import './styles/global.css';

function App() {
  return (
    <Router>
      <SliderProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/info" element={<Info />} />
          </Routes>
          <Navigation />
        </div>
      </SliderProvider>
    </Router>
  );
}

export default App;