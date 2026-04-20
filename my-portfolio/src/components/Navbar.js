// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>Afreenneha Shaikh</h2>
      <div>
        <Link to="/" style={styles.link}>Portfolio</Link>
        <Link to="/login"><button style={styles.loginBtn}>Login</button></Link>
        <Link to="/signup"><button style={styles.signupBtn}>Sign Up</button></Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#282c34', color: 'white' },
  link: { color: 'white', marginRight: '1rem', textDecoration: 'none' },
  loginBtn: { marginRight: '0.5rem', padding: '0.5rem 1rem', cursor: 'pointer' },
  signupBtn: { padding: '0.5rem 1rem', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }
};

export default Navbar;