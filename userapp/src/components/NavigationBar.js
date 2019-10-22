import React from 'react';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';
import AppLogo from '../assets/AppLogo.jpg'

const Styles = styled.div`
.navbar{
background-color: #00FF7F;
}
.navbar-brand, .navbar-nav .nav-link{
    color: Black;
}
&:hover{
color: white;
}

}
`
    ;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand >
                <a href="#">
                    <img src="AppLogo" height="35" width="120" />
                </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" />
            <Nav className="m1-auto">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {/* <Nav.Link href="/Scholarship">Scholarship</Nav.Link> */}
                    <NavDropdown title="Scholarship" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Home">Action</NavDropdown.Item>
                        <NavDropdown.Item href="/Home">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="/Home">Something</NavDropdown.Item>
                        <NavDropdown.Item href="/Home">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                    {/* <Nav.Link href="/Grants">Grants</Nav.Link> */}
                    <NavDropdown title="Grants" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Home">Action</NavDropdown.Item>
                        <NavDropdown.Item href="/Home">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="/Home">Something</NavDropdown.Item>
                        <NavDropdown.Item href="/Home">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
            </Nav>
        </Navbar>
    </Styles>
)