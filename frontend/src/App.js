import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Schedule from './pages/Schedule';
import MajorPick from './pages/MajorPick';
import MajorChange from './pages/MajorChange';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/build-schedule" element={<Schedule />} />
                <Route path="/pick-major" element={<MajorPick />} />
                <Route path="/change-major" element={<MajorChange />} />
            </Routes>
        </Router>
    );
}

export default App;
