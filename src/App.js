
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import Login from './Components/Login';

import Home1 from './Components/Home1';
import ProductCategories from './Components/Productcategories';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryPage from './Components/CategoryPage';
import ProductListing from './Components/ProductListing';
import Sample from './Components/Sample';


function App() {
  return (
    <>
      <Navbar></Navbar>
      
      <Routes>
      <Route path='/' element={<Home1 />}></Route>
      <Route path='/sample' element={<Sample />}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Register' element={<Registration/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/pl' element={<ProductListing/>}></Route>
      <Route path='/pc' element={<ProductCategories/>}></Route>
      <Route path="/category/:categoryName" element={<CategoryPage/>}></Route>
      
      </Routes>
    </>
  );
}

export default App;
