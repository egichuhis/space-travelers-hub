import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
