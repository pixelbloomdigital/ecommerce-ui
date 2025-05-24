import React, { useContext } from 'react';
import '../css/Home.css';
import { useNavigate } from 'react-router-dom';

import Layout from './layout';
import { CartContext } from '../context/CartContext';

// Import images
import chair from '../images/6_3602X_110425.webp';
import office_c from '../images/office.webp';
import rack from '../images/rack.webp';
import wood from '../images/wood.webp';

// ✅ Carousel setup
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../images/ho.jpg';
import slide2 from '../images/mo.webp';
import slide3 from '../images/xy.avif';

const products = [
  { id: 1, name: 'office chair', image: office_c, price: '₹1099', rating: 4.5 },
  { id: 2, name: 'cinema chair', image: chair, price: '₹1299', rating: 4.2 },
  { id: 3, name: 'shoe rack', image: rack, price: '₹599', rating: 4.8 },
  { id: 4, name: 'cupboard', image: wood, price: '₹4449', rating: 4.6 },
];

function App() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Layout>
      <div className="App">

        <div className="carousel-wrapper">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
          >
            <div>
              <img src={slide1} alt="Slide 1" />
            </div>
            <div>
              <img src={slide2} alt="Slide 2" />
            </div>
            <div>
              <img src={slide3} alt="Slide 3" />
            </div>
          </Carousel>
        </div>

        <header className="App-header">
          <div className="text-overlay">
            <h1>Welcome to HomeSeva</h1>
        
          </div>
        </header>

        <div className="product-section">
          <h2>Our Products</h2>
          <div className="card-container">
            {products.map((product) => (
              <div className="card" key={product.id} onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="card-content">
                  <h3>{product.name}</h3>
                  <p>Price: {product.price}</p>
                  <p>Rating: ⭐ {product.rating}</p>
                  <button 
                    className="add-to-cart-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default App;