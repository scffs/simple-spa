import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { ABOUT, HOME } from '../routes/routes.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className='p-2 position-relative'>
      <Navbar.Toggle aria-controls="navbar-nav" onClick={handleMenuToggle} />
      <Navbar.Collapse id="navbar-nav" className={isMenuOpen ? 'show' : ''}>
        <Nav className="mr-auto">
          <Link to={HOME} className="nav-link">Список постов</Link>
          <Link to={ABOUT} className="nav-link">Обо мне</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;