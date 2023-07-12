// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Mens from './components/Mens';
import MensMulti from './components/MensMulti';
import MensSingle from './components/MensSingle';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Womens from './components/Womens';
import Kids from './components/Kids';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route exact path='/kids' element={<Kids />} />
          <Route exact path='/womens' element={<Womens />} />
          <Route exact path='/profile' element= {<Profile />} />
          <Route exact path='/cart' element={<Cart />} />
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
