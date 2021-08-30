import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ListData from './components/ListData';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <div className="link">
        <Link to="/sign-up" id="link">Sign Up</Link>
        <Link to="/about" id="link">About</Link>
        <Link to="/listData" id="link">List Data</Link>
      </div>
      
    <Main/>
    
      <footer>
          &copy; { new Date().getFullYear() } Copyright  <a href="https://id.reactjs.org/" rel='noreferrer' target='_blank'> React JS </a> <br/>
          Created with Visual Studio Code by Kelompok 1 
      </footer>
    </div>
  );
}

export default App;