import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets/Rockets';
import Profile from './components/Profile';
import Missions from './components/Missions/Missions';

function App() {
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
