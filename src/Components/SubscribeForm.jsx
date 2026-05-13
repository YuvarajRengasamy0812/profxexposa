import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required.');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      console.log('Subscribed with:', email);
      // TODO: handle actual subscription logic here
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row gy-3">
        <div className="col-lg-8 col-md-8">
          <div className="sub-email">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <small className="text-danger">{error}</small>}
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="sub-button">
            <button type="submit" className="btn btn3 w-100">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SubscribeForm;
