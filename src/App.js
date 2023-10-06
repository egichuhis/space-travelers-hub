import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRockets } from './redux/features/rocket/rocketSlice';
import { getMissionData } from './redux/features/missions/missionSlice';
import './App.css';
import RocketsList from './components/Rockets/RocketsList';
import Profile from './components/Profile/Profile';
import Missions from './components/Missions/Missions';
import NavBar from './components/Layout/NavBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(getMissionData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<RocketsList />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
