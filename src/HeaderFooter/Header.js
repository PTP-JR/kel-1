import Logo from './assets/logo.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


function Header(){
    return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img src={Logo} className="logo" alt="logo-situs"/>
          <Navbar.Brand href="#home"><Link to="/" className="nama-logo" style={{ textDecoration: 'none' }}>THE MOVIES</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link to="/" className="link-navigasi" style={{ textDecoration: 'none' }}>Home</Link>
                <Link to="/about" className="link-navigasi" style={{ textDecoration: 'none' }}>About</Link>
                <Link to="/login" className="link-navigasi login-header" style={{ textDecoration: 'none' }}>Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;