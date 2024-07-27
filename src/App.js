import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import Pollustion from "./pages/Pollustion";
import Education from "./pages/Education";
// import Settings from './components/dashboard/Settings';
// import Profile from './components/dashboard/Profile';

function App() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(`Latitude: ${position.coords.latitude}`);
          console.log(`Longitude: ${position.coords.longitude}`);
        },
        (error) => {
          console.error(`Error: ${error.message}`);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="weather" element={<Weather />} />
          <Route path="pollustion" element={<Pollustion />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
