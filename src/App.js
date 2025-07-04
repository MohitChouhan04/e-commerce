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
import {GlobalStyle} from './Stylefiles/GlobalStyle'
import { ThemeProvider } from 'styled-components';
import Header from './MainComponent/Header';
import Nav from './MainComponent/Nav';
import Hsection from './MainComponent/HeroSection';
const App = () => {
  const theme = {
    colors:{
      bg:"#E8E8E8",
      helper:"#ff5733"
    },
    media:{
      mobile:"768px",
      tab:"998px",
    }
  }
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle />
    <Header />
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

    </ThemeProvider>

  );
}

export default App;
