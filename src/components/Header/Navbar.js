import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <div className='text-center'>
      <Navbar  className=" fw-2 text-center text-capitalize p-4"bg="dark" data-bs-theme="dark">
        
          <Navbar.Brand href="/">PersonalPortfolio</Navbar.Brand>
          <Nav className="mx-auto mx-2 my-2 justify-content-center text-center">
          {/* <Link to="/skills"> */}
            <Nav.Link as={Link} to="/skills" >Skills</Nav.Link>
            {/* </Link> */}
            <Nav.Link as={Link} to="/projects" >Project</Nav.Link>
            <Nav.Link as={Link} to="/education" >Education</Nav.Link>
            
            <Nav.Link as={Link} to="/quotes">Quotes</Nav.Link>
            <Nav.Link href="*">Contact </Nav.Link>
            <Nav.Link as={Link} to="/about">About </Nav.Link>
          </Nav>
        
      </Navbar>
      <Outlet/>
    </div>
  );
}

export default CustomNavbar;