// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route exact path='/' element={ <Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
