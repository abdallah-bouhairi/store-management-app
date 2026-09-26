import React, { useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="page home-page">
      <h1>Welcome to ShopHub</h1>
      <p>Discover top-tier products fetched directly from our online catalog.</p>

      <div className="newsletter-box">
        <h3>Subscribe for Updates</h3>
        {subscribed ? (
          <p className="success-msg">Thank you for subscribing with {email}!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;