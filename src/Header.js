import React from 'react';
import logo from './components/logo.jpg';
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/About us";
import Clearance from "./pages/Clearance";
import Contacts from "./pages/Contacts";
import NavbarToggle from "react-bootstrap/NavbarToggle";


const Header = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand = 'md' bg='dark' variant='dark'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={logo}
                             height="30"
                             width="30"
                             className="d-inline-block align-top"
                             alt="Logo"/>
                    </NavbarBrand>
                    <NavbarToggle area-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav"/>
                    <Nav className="me-auto">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="../aboutus">About us</NavLink>
                        <NavLink href="../contacts">Contacts</NavLink>
                        <NavLink href="../clearance">Clearance</NavLink>
                    </Nav>
                    <Form inlive="true">
                        <FormControl
                            inline="true"
                            type="text"
                            className="me-sm-2"
                            />
                    </Form>

                    <Button variant="outline-info">Search</Button>


                </Container>


            </Navbar>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutUs" element={<AboutUs/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="/clearance" element={<Clearance/>}/>
</Routes>



        </div>
    );
}


export default Header;