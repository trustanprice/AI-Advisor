import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MajorChange from './pages/MajorChange';
import MajorPick from './pages/MajorPick';
import Schedule from './pages/Schedule';
import About from './pages/About';

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
