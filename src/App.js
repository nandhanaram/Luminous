
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import AddProductCategory from './Components/AddProductCategory';
import Products from './Components/Products';
function App() {
  return (
    <><Navbar></Navbar>
    <Routes>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/admin/addcategory' element={<AddProductCategory/>}></Route>
    <Route path='/admin/products' element={<Products/>}></Route>
    </Routes>   
    </>
  );
}
export default App;
