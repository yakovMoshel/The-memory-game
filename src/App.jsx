import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import Players from './pages/PlayersPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/PlayersPage" element={<Players />} />
      </Routes>
    </Router>
  );
}

export default App;
