import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarManu.css';

const NavbarManu = () => {
    return (
        <Navbar expand="lg" className="nabar-manu">
            <Container>
                <Link to="/" className="navbar-brand">
                    AFC
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/teams" className="nav-link">
                            All Teams
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarManu;
