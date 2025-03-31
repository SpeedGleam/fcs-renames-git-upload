import React, { useState } from 'react';
import "../assets/styles/MarketPlace.css";
import { loadStripe } from '@stripe/stripe-js';

function Marketplace() {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: 1,
      title: 'Vintage Camera',
      price: 299.99,
      image: 'https://picsum.photos/seed/camera/400/300',
      seller: 'John Doe',
      description: 'Excellent condition vintage camera with original leather case.',
    },
    {
      id: 2,
      title: 'Gaming Console',
      price: 499.99,
      image: 'https://picsum.photos/seed/console/400/300',
      seller: 'Jane Smith',
      description: 'Latest generation gaming console with two controllers.',
    },
    {
      id: 3,
      title: 'Smartphone',
      price: 699.99,
      image: 'https://picsum.photos/seed/phone/400/300',
      seller: 'Bob Wilson',
      description: 'Brand new smartphone with warranty and original accessories.',
    },
    {
      id: 4,
      title: 'Laptop',
      price: 999.99,
      image: 'https://picsum.photos/seed/laptop/400/300',
      seller: 'Alice Brown',
      description: 'High-performance laptop perfect for gaming and content creation.',
    },
  ];

  const handleBuyNow = (item) => {
    setSelectedItem(item);
    setShowPayment(true);
  };

  const handlePayment = async () => {
    // Simulate payment processing
    setShowPayment(false);
    alert('Payment successful! This is a simulation.');
  };

  return (
    <div className="marketplace-container fade-in">
      <h1>Marketplace</h1>
      
      <div className="marketplace-filters slide-up">
        <input type="text" placeholder="Search items..." className="search-input" />
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="other">Other</option>
        </select>
        <button className="btn-primary">Post Item</button>
      </div>

      <div className="items-grid">
        {items.map(item => (
          <div key={item.id} className="item-card slide-up">
            <img src={item.image} alt={item.title} className="item-image" />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p className="item-price">${item.price}</p>
              <p className="item-seller">Seller: {item.seller}</p>
              <p className="item-description">{item.description}</p>
              <div className="item-actions">
                <button 
                  className="btn-primary"
                  onClick={() => handleBuyNow(item)}
                >
                  Buy Now
                </button>
                <button className="btn-secondary">Message Seller</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPayment && (
        <div className="payment-modal">
          <div className="payment-content slide-up">
            <h2>Complete Purchase</h2>
            <div className="payment-details">
              <h3>{selectedItem.title}</h3>
              <p className="price">Total: ${selectedItem.price}</p>
            </div>
            <div className="payment-form">
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="4242 4242 4242 4242" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input type="text" placeholder="123" />
                </div>
              </div>
              <button className="btn-primary" onClick={handlePayment}>
                Pay ${selectedItem.price}
              </button>
              <button 
                className="btn-secondary"
                onClick={() => setShowPayment(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Marketplace;