import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard';
import Weather from './pages/Weather'
import Pollustion from './pages/Pollustion';
import Education from './pages/Education';
// import Settings from './components/dashboard/Settings';
// import Profile from './components/dashboard/Profile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path='weather' element={<Weather />} />
                    <Route path="pollustion" element={<Pollustion />} />
                    <Route path="education" element={<Education />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
