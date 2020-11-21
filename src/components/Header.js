import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

 class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#eaeaea"}}>
                <Link to="/" className="text-dark font-weight-bold mr-3"style={{textDecoration:"none",fontSize:"20px"}}>Covid-19 Tracker</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Link className="nav-link font-weight-bold" to="/Allworld">World</Link>
                    <Link className="nav-link font-weight-bold" to="/India">India</Link>
                    <Link className="nav-link font-weight-bold" to="/World">Countries</Link>

                    
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;