import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import './Header.css';

const Header = () => (
  <Navbar bsStyle="" fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><i className="fa fa-fw fa-car"/> KC Auto</Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

export default Header;