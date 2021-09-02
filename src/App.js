import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';
import {Link} from 'react-router-dom';
import Main from './Main.js';
import './App.css';

function App() {
  return (
    <div className="App">
  <Header/>
  <Main/>
 <Footer/>

    </div>
  );
}

export default App;