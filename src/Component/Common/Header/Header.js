import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className='navitem'>
            <Navbar collapseOnSelect expand="lg" bg="" variant="white">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://i.ibb.co/Dt8tKRp/Logo.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navmenu">
                        <NavDropdown title="Product" className='navmenu1' id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Item 01
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Item 02
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features" className='navItems'>About Us</Nav.Link>
                        <Nav.Link href="#features" className='navItems'>Contacts</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            <button className='getStartedBtn'>Get Started</button>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <button className='LoginBtn'>Login</button>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;