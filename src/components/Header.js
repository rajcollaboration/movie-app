import React, { Component } from 'react'
import * as Bts from "react-bootstrap";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        {[ 'md'].map((expand)=>(
            <Bts.Navbar bg="dark" variant="dark" key={expand} expand={expand} className="mb-3">
            <Bts.Container>
              <Link to="/"><Bts.Navbar.Brand >Movie App</Bts.Navbar.Brand></Link>
              
              <Bts.Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Bts.Navbar.Collapse id="basic-navbar-nav">
                <Bts.Nav className="me-auto">
                <Bts.Nav.Link ><Link to="allMovies">All Movies</Link></Bts.Nav.Link>
                  <Bts.Nav.Link><Link to="/feverates">Feverate Movies</Link></Bts.Nav.Link>
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