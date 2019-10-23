import React from 'react';
import { Nav, Navbar, NavDropdown,} from 'react-bootstrap';
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
 .navbar-brand{
    display:flex;
    align-items:center;
}
.navbar-brand>img{
    padding 7px 14px;
}

.navbar {
    width: 99%;
    padding: 20px;
    position: relative;
    top: 0;
    left: 0;
    transition: top 0.6s;
}
}
`
    ;

export const NavigationBar = () => (
    <Styles>
        <Navbar navbar-expand="bg" fixed="top" >
            <Navbar.Brand >
                <a href="#">
                    <img src="https://libertyhospitalfoundation.org/wp-content/uploads/2018/04/FinalAsset-1.png" height="50" width="150" />
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
                        <NavDropdown.Item href="/Scholarship_NewApplication">New Application</NavDropdown.Item>
                        <NavDropdown.Item href="/Scholarship_TrackStatus">Track Status </NavDropdown.Item>
                        <NavDropdown.Item href="/Scholarship_EditApplication">Edit Application</NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                    {/* <Nav.Link href="/Grants">Grants</Nav.Link> */}
                    <NavDropdown title="Grants" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/NewApplication">New Application</NavDropdown.Item>
                        <NavDropdown.Item href="/TrackStatus">Track Status </NavDropdown.Item>
                        <NavDropdown.Item href="/EditApplication">Edit Application</NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
            </Nav>
        </Navbar>
    </Styles>
)