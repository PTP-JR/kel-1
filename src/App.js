import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Header';
import {Link} from 'react-router-dom';
import Main from './Main.js';
import './App.css';

function App() {
  return (
    <div className="App">
  <Header/>
  <Main/>
  <footer>
        &copy; { new Date().getFullYear() } Copyright  <Link to="https://id.reactjs.org/" rel='noreferrer' target='_blank'> React JS</Link> <br/>
        Created with Visual Studio Code by Kelompok 1 
    </footer>
    </div>
  );
}

export default App;