// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Mens from './components/Mens';
import MensMulti from './components/MensMulti';
import MensSingle from './components/MensSingle';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route exact path='/mens-single' element={ <MensSingle />} />
          <Route exact path='/mens-multi' element={ <MensMulti />} />
          <Route exact path='/mens' element={<Mens />} />
          <Route exact path='/' element={ <Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
