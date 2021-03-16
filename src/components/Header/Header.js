import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    const menuStyle = {
        color: '#39c0fb',
        borderBottom: '3px solid #39c0fb'
    }
    return (
        <>
            <Navbar bg="dark" expand="lg" className="nav-bar">
                <Container>
                    <div className="brandName">
                        <NavLink active to="/">COUNTRIES</NavLink>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto navBarMenu" >
                            <NavLink activeStyle={menuStyle} exact to='/'>Home</NavLink>
                            <NavLink activeStyle={menuStyle} to='/region'>Region</NavLink>
                            <NavLink activeStyle={menuStyle} to='/regionalbloc'>Regional Bloc</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;