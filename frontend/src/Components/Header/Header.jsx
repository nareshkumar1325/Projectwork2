import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,useNavigate} from "react-router-dom";


const Header = () => {
  const navigate=useNavigate()
 const handleLogout=()=>{
  sessionStorage.removeItem('token'
  )
  navigate("/")
    window.location.reload();
 }
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src="/logo.png" width={"120px"} alt="" />
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  Link as={Link} to="/ ">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
                        <Nav.Link Link as={Link} to="/register ">Register</Nav.Link>
                        <Nav.Link Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link Link as={Link} to="/addbooks ">Add books</Nav.Link>
                        <Nav.Link Link as={Link} to="/profile ">Profile</Nav.Link>
                        <Nav.Link onClick={handleLogout} Link as={Link} to="/logout">Logout</Nav.Link>
                        <Nav.Link Link as={Link} to="/books ">Books</Nav.Link>
                        <Nav.Link Link as={Link} to="/therapist ">Therapists</Nav.Link>




          </Nav>
          <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item Link as={Link} to="/addtherapist " >Careers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Investors
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Media</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                FAQs
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header