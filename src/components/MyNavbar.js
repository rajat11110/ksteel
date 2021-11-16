import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import mainLogo from'../images/KumarSteel.png';

import './MyNavbar.css'

function MyNavbar() {
    return (
      <>
    
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img src={mainLogo} width='100em' className="logos"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <NavDropdown title="Home Furniture" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Sofa</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Bed</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Wardrobe</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Dining</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">TV Unit</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Crockery</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Dressing</NavDropdown.Item>
          
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Rack</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Matress</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Education Institution" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Wooden Furniture</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Metal Furniture</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Office Furniture" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Home Furniture</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">School Furniture</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Office Furniture</NavDropdown.Item>
        </NavDropdown>
        
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>

    </Navbar.Collapse>
    </Container>
  </Navbar>
  
    
  </>
  
    );
  }
  
  export default MyNavbar;
  