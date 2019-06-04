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
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <Navbar
        collapseOnSelect
        expanded={this.state.expanded}
        onToggle={this.onToggle}
        expand="md"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link onClick={this.onToggle} to="/">
              KOTI
            </Link>
            <Link onClick={this.onToggle} to="/timetable">
              AIKATAULU
            </Link>
            <Link onClick={this.onToggle} to="/info">
              OHJEITA
            </Link>
            <Link onClick={this.onToggle} to="/rsvp">
              RSVP
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
