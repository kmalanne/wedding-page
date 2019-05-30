import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

export const Header: SFC = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/">HÄÄMME</Link>
          <Link to="/info">TIETOA</Link>
          <Link to="/rsvp">RSVP</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
