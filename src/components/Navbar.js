import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SessionContext } from '../SessionContext';

const Navbar = () => {
  const session = useContext(SessionContext);
  const name = session?.user?.user_metadata?.name;

  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/">Browse</Link> | 
      <Link to="/pricing">Pricing</Link> | 
      <Link to="/how-it-works">How It Works</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/signup">Sign Up</Link> | 
      <Link to="/reserve">Reserve</Link>
      {name && <span style={{ marginLeft: '1rem' }}>Welcome, {name}</span>}
    </nav>
  );
};

export default Navbar;
