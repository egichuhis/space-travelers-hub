import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets/Rockets';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
