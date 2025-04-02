import React, { Component } from 'react'
import { Button, Col, Input, InputGroup, Nav, NavItem, NavLink, Navbar, NavbarBrand, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

class NavigationBar extends Component {


    render() {
        return (
            <Navbar color="black">
                <Nav>

                    <NavbarBrand className='brand-link' href="/edebiyattabugun">
                        Edebiyatta Bugün
                    </NavbarBrand>

                    <NavItem>
                        <NavLink>
                            <Link className='link' to="/kelime-ara">Kelime Ara</Link>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink>
                            <Link className='link' to="/alintilar">Alıntılar</Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}


export default NavigationBar;