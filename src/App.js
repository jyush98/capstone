import './App.css';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoonPage from './components/ComingSoonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/book" element={<BookingPage/>}></Route>
        <Route path="/coming-soon" element={<ComingSoonPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
