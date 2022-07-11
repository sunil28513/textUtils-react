import React from 'react'
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"; 

export default function Navbars(props) {
  return (
    <>
        <Navbar className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <Container fluid>
            <Navbar.Brand href="/">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as ={Link} to="/">Home</Nav.Link>
                {/* <Nav.Link as = {Link} to="/about">{props.aboutText}</Nav.Link> */}
               
              </Nav>
              <div className={`form-check form-switch text-${props.mode ==='light' ? 'dark': 'light'}`}>
                  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch</label>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

Navbars.propTypes = {
  title : PropTypes.string.isRequired, 
  aboutText:PropTypes.string
}

Navbars.defaultProps = {
  title:'Set title here',
  aboutText:'about'
}