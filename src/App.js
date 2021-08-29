import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
      {/* <Home /> */}
      
      <div className="link">
        <Link to="/login" id="link">Login</Link>
        <Link to="/about" id="link">About</Link>
      </div>
      
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

      <footer>
          &copy; { new Date().getFullYear() } Copyright  <a href="https://id.reactjs.org/" rel='noreferrer' target='_blank'> React JS </a> <br/>
          Created with Visual Studio Code by Kelompok 1 
      </footer>
      
    </>
  );
}

export default App;
