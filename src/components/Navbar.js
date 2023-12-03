import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navv'>
      <h4 style={{fontSize:'20px'}}>Dictionary App</h4>
      <Link id='ll' className='ss' to="/">Home</Link>
      <Link className='ss' to="/history">History</Link>
    </nav>
  );
};

export default Navbar;
