// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link to='/members/list' className='nav-link'>
        List Members
      </Link>
      <Link to='/members/create' className='nav-link'>
        Create Member
      </Link>
    </div>
  );
};

export default Navbar;
