import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

export interface NavigationState {
  expanded: boolean;
}

const initialState = {
  expanded: false,
};
type State = Readonly<typeof initialState>;

export class Navigation extends Component<{}, NavigationState> {
  readonly state: State = initialState;

  onToggle = () => {
    if (window.innerWidth <= 768) {
      this.setState({ expanded: !this.state.expanded });
    }
  };

  render() {
    return (
      <Navbar
        collapseOnSelect
        expanded={this.state.expanded}
        onToggle={this.onToggle}
        expand="md"
      >
        <h1 className="brand">Kai-Mikael &amp; Ainolaura</h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link onClick={this.onToggle} to="/">
              KUTSU
            </Link>
            <Link onClick={this.onToggle} to="/rsvp">
              RSVP
            </Link>
            <Link onClick={this.onToggle} to="/info">
              HÄÄINFO
            </Link>
            <Link onClick={this.onToggle} to="/contact">
              YHTEYSTIEDOT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
