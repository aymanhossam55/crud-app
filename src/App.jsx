import './App.css';
import { Route, Routes } from "react-router";
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Products from './pages/Products';
import Home from './pages/Home';
import Addproduct from './pages/Addproduct';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='row'>
        <div className='col-2 sidebar'>
        <Sidebar/>
        </div>
        <div className='col-10'>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path='products' element ={
            <>
              <Outlet />
            </>
          }>
              <Route path="" element = {<Products/>}/>
              <Route path="add" element = {<Addproduct/>}/>
              <Route path=":productID" element = {<ProductDetails/>}/>
          </Route>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
