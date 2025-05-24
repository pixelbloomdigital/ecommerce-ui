


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Screens/Home';
// import CartPage from './Screens/CartPage';
// import { CartProvider } from './context/CartContext';

// const App = () => {
//   return (
//     <Router>
//       <CartProvider>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<CartPage />} />

//            </Routes>
//       </CartProvider>
//     </Router>
//   );
// };

// export default App;














import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import CartPage from './Screens/CartPage';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
 