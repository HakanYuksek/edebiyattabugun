import React, { Component } from 'react'
import { Button, Col, Input, InputGroup, Nav, NavItem, NavLink, Navbar, NavbarBrand, Row } from 'reactstrap'

class NavigationBar extends Component {


    render() {
        return (
            <Navbar color="black">
                <Nav>

                    <NavbarBrand className='brand-link' href="/edebiyattabugun">
                        Edebiyatta Bugün
                    </NavbarBrand>
                </Nav>
            </Navbar>
        )
    }
}


export default NavigationBar;