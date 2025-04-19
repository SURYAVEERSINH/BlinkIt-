import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';
import { useCart } from './context/CartContext';
import Navbar from './Navbar';

const CategoryPage = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const [addedMessage, setAddedMessage] = useState(''); // ✅ New state for message

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${name}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [name]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedMessage(`${product.name} added to cart!`);
    setTimeout(() => setAddedMessage(''), 2000); // ✅ Clear after 2 sec
  };

  return (
    <>
      <Navbar/>
      <div className="category-page-container">
        <h2 className="category-title">
          {name.charAt(0).toUpperCase() + name.slice(1)} Products
        </h2>

        {/* ✅ Success message */}
        {addedMessage && (
          <div className="added-message">{addedMessage}</div>
        )}

        {loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product._id}>
                <img src={product.imageUrl} alt={product.name} className="product-img" />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
      
    </>
  );
};

export default CategoryPage;
