
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.js';
import Product from './Pages/Product.js';
import Cart from './Pages/Cart.js';
import LoginSignup from './Pages/LoginSignup.js';
import ShopCategory from './Pages/ShopCategory.js';
import Footer from './Footer/Footer.js';
import men_banner from './Assets/Frontend_Assets/banner_mens.png';
import women_banner from './Assets/Frontend_Assets/banner_women.png';
import kids_banner from './Assets/Frontend_Assets/banner_kids.png';

function App() {
  return (
    <div className="Ecommerce">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner}  category="men"/>} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids"/>} />
        <Route path="/product/:productId" element={<Product />} />

        
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
      </BrowserRouter>      
      
    </div>
  );
}

export default App;
