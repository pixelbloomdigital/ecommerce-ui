import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import CartPage from './Screens/CartPage';
import { CartProvider } from './context/CartContext';
import Contact from './Screens/Contact';
import SingleProductPage from './Screens/SingleProductPage';
import CartSlider from './components/CartSlider';
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/cart-slider" element={<CartSlider />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
 