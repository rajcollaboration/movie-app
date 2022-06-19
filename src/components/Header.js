import React, { Component } from 'react'
import * as Bts from "react-bootstrap";


export class Header extends Component {
  render() {
    return (
      <div>
        {[ 'md'].map((expand)=>(
            <Bts.Navbar bg="dark" variant="dark" key={expand} expand={expand} className="mb-3">
            <Bts.Container>
              <Bts.Navbar.Brand href="#home">React-Bootstrap</Bts.Navbar.Brand>
              <Bts.Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Bts.Navbar.Collapse id="basic-navbar-nav">
                <Bts.Nav className="me-auto">
                  <Bts.Nav.Link href="#home">Home</Bts.Nav.Link>
                  <Bts.Nav.Link href="#link">Link</Bts.Nav.Link>
                  <Bts.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <Bts.NavDropdown.Item href="#action/3.1">Action</Bts.NavDropdown.Item>
                    <Bts.NavDropdown.Item href="#action/3.2">
                      Another action
                    </Bts.NavDropdown.Item>
                    <Bts.NavDropdown.Item href="#action/3.3">Something</Bts.NavDropdown.Item>
                    <Bts.NavDropdown.Divider />
                    <Bts.NavDropdown.Item href="#action/3.4">
                      Separated link
                    </Bts.NavDropdown.Item>
                  </Bts.NavDropdown>
                </Bts.Nav>
                <Bts.Form className="d-flex">
                  <Bts.Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Bts.Button variant="outline-success">Search</Bts.Button>
                </Bts.Form>
              </Bts.Navbar.Collapse>
            </Bts.Container>
          </Bts.Navbar>
        ))}
        
      </div>
    )
  }
}

export default Header