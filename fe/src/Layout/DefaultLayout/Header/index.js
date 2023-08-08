import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "react-router-dom"

function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
<<<<<<< Updated upstream
            
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
=======
          <Link to="/about" className={classes.link}>About</Link>
          <Link to="/" className={classes.link}>Contact</Link>
          
          </Nav>
          <Nav>
          <Link to="/login" className={classes.link} >Login</Link>
>>>>>>> Stashed changes
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;