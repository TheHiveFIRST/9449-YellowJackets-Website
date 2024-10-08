import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OpenHouse from './components/OpenHouse';

function App() {
  return (
    <Router>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/openhouse' element={<OpenHouse />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
}

export default App;
