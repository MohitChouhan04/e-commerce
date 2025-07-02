import react from 'react';
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Products from './Component/Products';
import Contact from './Component/Contact';
import SingleProduct from './Component/SingleProduct';
import Cart from './Component/Cart';
import ErrorPage from './Component/ErrorPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<ErrorPage/>}/>

        

      </Routes>
    </BrowserRouter>

  );
}

export default App;
