import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Logo from './assets/logo.png';
import {Dropdown} from 'react-bootstrap';
import {NavDropdown, Button, Navbar, Container, Nav} from 'react-bootstrap';

function App() {

  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img src={Logo} className="logo" alt="logo-situs"/>
          <Navbar.Brand href="#home"><Link to="/" className="nama-logo" style={{ textDecoration: 'none' }}>The Movies</Link></Navbar.Brand>
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

      <Main/>
  
      <footer>
          &copy; { new Date().getFullYear() } Copyright  <a href="https://id.reactjs.org/" rel='noreferrer' target='_blank'> React JS </a> <br/>
          Created with Visual Studio Code by Kelompok 1 
      </footer>
    </>
  );
}

export default App;