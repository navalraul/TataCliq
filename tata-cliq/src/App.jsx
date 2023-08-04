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
import HomeKitchen from './components/HomeKitchen';
import Beauty from './components/Beauty';
import Gadgets from './components/Gadgets';
import Jwellery from './components/Jwellery';
import Checkout from './components/Checkout';
import Whishlist from './components/Whishlist';
import Register from './components/Register';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import AllProducts from './components/AllProducts';
import Single from './components/Single';
// import NavbarT from './components/NavbarT';

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
          <Route exact path='/all-products' element={<AllProducts />} />
          <Route exact path='/single/:id' element={<Single />} />
          <Route exact path='/add-product' element={<Addproduct />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/whishlist' element={<Whishlist />} />
          <Route exact path='/check-out' element={<Checkout />} />
          <Route exact path='/jwellery' element={<Jwellery />} />
          <Route exact path='/gadgets' element={<Gadgets />} />
          <Route exact path='/beauty' element={<Beauty />} />
          <Route exact path='/home-kitchen' element={<HomeKitchen />} />
          <Route exact path='/kids' element={<Kids />} />
          <Route exact path='/womens' element={<Womens />} />
          <Route exact path='/profile' element= {<Profile />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/mens-single' element={ <MensSingle />} />
          {/* <Route exact path='/mens-multi/:id' element={ <MensMulti />} /> */}
          
          <Route exact path='/mens' element={<Mens />} />
          <Route exact path='/' element={ <Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
