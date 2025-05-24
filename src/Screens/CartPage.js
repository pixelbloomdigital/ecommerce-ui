// import React, { useContext } from 'react';
// import Layout from './layout';
// import { CartContext } from '../context/CartContext';
// import '../css/CartPage.css';

// const CartPage = () => {
//   const { cartItems } = useContext(CartContext);

//   return (
//     <Layout>
//       <div className="cart-page">
//         <h2>Your Cart</h2>
//         {cartItems.length === 0 ? (
//           <p>No items in cart.</p>
//         ) : (
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div className="cart-card" key={item.id}>
//                 <img src={item.image} alt={item.name} />
//                 <div>
//                   <h3>{item.name}</h3>
//                   <p>Price: {item.price}</p>
//                   <p>Quantity: {item.count}</p>
//                   <p>Rating: ⭐ {item.rating}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;









import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../css/CartPage.css'; // Optional: You can style your cart here


const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter(item => item.count > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[₹,]/g, '')) || 0;
      return total + item.count * price;
    }, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Rating: ⭐ {item.rating}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>🗑 Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="total-section">
          <h3>Total: ₹{getTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
