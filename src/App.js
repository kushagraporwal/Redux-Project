import logo from './logo.svg';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Header from './components/Header';
import Productlist from './components/Productlist';
import Productcomponent from './components/Productcomponent';
import Productdetail from './components/Productdetail';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
    <Router>
      <Routes>
      <Route path="/" exact component= {Productlist} />
      <Route path="/product/:productid" exact component= {Productdetail} />
      <Route>404 Not Found</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
