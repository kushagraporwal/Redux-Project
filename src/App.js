import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Productlist from './components/Productlist';
import Productcomponent from './components/Productcomponent';
import Productdetail from './components/Productdetail';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
      <Route exact path="/" element={<Productlist/>} />
      <Route exact path="/products/:productid" element={<Productdetail/>} />
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
