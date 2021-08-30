import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Logo from './assets/logo.png';
import {Dropdown} from 'react-bootstrap';


function App() {

  return (
    <>
<div className="header-menu">
<div className="header-img">
        <img className="logo" src={Logo} alt="logo"/>
        <h1>The Movies</h1>
</div> 

<div className="menu navbar-nav">
        <ul className="nav-link">
        <li Link to="/" className="link-navigasi nav-item" style={{ textDecoration: 'none' }}>Home</li>
        <li Link to="/about" className="link-navigasi nav-item" style={{ textDecoration: 'none' }}>About</li>
        <li Link to="/listData" className="link-navigasi nav-item" style={{ textDecoration: 'none' }}>List Data</li></ul>
        </div>
</div> 

      
     
     <Main/>





      
      <footer>
          &copy; { new Date().getFullYear() } Copyright  <a href="https://id.reactjs.org/" rel='noreferrer' target='_blank'> React JS </a> <br/>
          Created with Visual Studio Code by Kelompok 1 
      </footer>
    </>
  );
}

export default App;