
// import { Link} from 'react-router-dom';
// import '../css/navbar.css'; 


// const Navbar = () => {
//  return (
//     <div className="App-options">
//  <nav className="nav-left">
//         <ul>
//           <Link to="/Home">Home</Link>
//           <Link to="/aboutus">About us</Link>
//           <Link to="/Ourservices">Our service</Link>
//           <Link to="/Contact">Contact us</Link>
          

//         </ul>
//       </nav>
//       <nav className="nav-right">
//           <Link to="/cart" className="cart-button">🛒 Add to Cart</Link>
// <Link to="/Login">Login</Link>

//       </nav>
//       </div>
//   );
// }

// export default Navbar;

















import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { CartContext } from '../context/CartContext';
import logo from '../images/Screenshot 2025-05-24 102407.png'

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="App-options">
      <nav className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Ourservices">Shope</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/Contact">Contact us</Link>
          
        </ul>
      </nav>
      <nav className="nav-right">
        <Link to="/cart" className="cart-button">
          🛒 Add to Cart ({itemCount})
        </Link>
        <Link to="/Login">Login</Link>
      </nav>
    </div>
  );
};

export default Navbar;
