import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRockets } from './redux/features/rocket/rocketSlice';
import { getMissionData } from './redux/features/missions/missionSlice';
import './App.css';
import Rockets from './components/Rockets/Rockets';
import Profile from './components/Profile';
import Missions from './components/Missions/Missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(getMissionData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
