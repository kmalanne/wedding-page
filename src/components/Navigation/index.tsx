import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

export const Navigation: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  const onToggle = () => {
    if (window.innerWidth <= 767) {
      setExpanded(!expanded);
    }
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expanded={expanded}
        onToggle={onToggle}
        expand="md"
      >
        <h1 className="brand">Ainolaura &amp; Kai-Mikael</h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link onClick={onToggle} to="/">
              KUTSU
            </Link>
            <Link onClick={onToggle} to="/rsvp">
              RSVP
            </Link>
            <Link onClick={onToggle} to="/info">
              HÄÄINFO
            </Link>
            <Link onClick={onToggle} to="/contact">
              YHTEYSTIEDOT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
