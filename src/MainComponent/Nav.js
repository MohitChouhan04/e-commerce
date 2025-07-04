import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const NavWrapper = styled.nav`

  .cart-trolley--link{
  position:relative;
  .cart-trolley{
  position:relative;
  font-size:2.5rem;
  }
  .cart-total--item{
  width:2.4rem;
  height:2.4rem;
  position:absolute;
  background-color:#000;
  color:#000;
  border-radius:50%;
  display:grid;
  palce-items:center;
  top:-20%;
  left:70%;
  background-color:${({theme})=>theme.colors.bg};

  }
  }
  .navbar-lists {

    
    display: flex;
    flex-direction: row;
    list-style:none;

    gap: 4.5rem;
    align-items: center;
    


    .navbar-link {
      &:link,
      &:visited {
        text-decoration: none;
        display: inline-block;
        font-size: 1.4rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
  .mobile-navbar-btn{
  display:none;
  cursor:pointer;
  background-color:transparent;
  border :none;
  }
  .mobile-nav-icon[name="close-outliine"]{
  display:none;
  }
  .close-outline{
  display:none;
  }

  @media(max-width:${({theme})=> theme.media.mobile}){
  .mobile-navbar-btn{
  display:inline-block;
  z-index:9999;
  border:${({theme})=> theme.colors.black};

  .mobile-nav-icon{
  font-size: 4.2rem;
  color:${({theme})=>theme.colors.black};
  }
  }
  .active .mobile-nav-icon{
  display:none;
  font-size:4.2rem;
  position:absolute;
  top:30%;
  right:10%;
  color: ${({theme})=> theme.colors.black};
  z-index:9999;
  }

  .active .close-outline{
  display:inline-block;
  }
  .navbar-lists {
  width:100vw;
  height:100vh;
  position:absolute;
  top:0;
  left:0;
  background-color:#fff;

  display:flex;
  justify-content:center;
  flex-direction:column;

  visibility:hidden;
  opacity:0;
  transform:translateX(100%);
  transition:all 3s linear;


  }
  .active .navbar-lists{
  visibility:visible;
  opacity:1;
  transform:translateX(0);
  z-index:999;
  transform-origin:right;
  transition:all 3s linear;

  .navbar-link{
  font-size:4.2rem
  }

  }

  }



  
  `;
const Nav = () =>{
  const [menuIcon, setMenuIcon] = useState()
  return (
    <NavWrapper>
      <div className={menuIcon ?"navbar active":"navbar" }>
        <ul className='navbar-lists'>
          <li>
            <NavLink to="/" className="navbar-link"  onClick={()=>setMenuIcon(false)}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" className="navbar-link" onClick={()=>setMenuIcon(false)}>About</NavLink>
          </li>

          <li>
            <NavLink to="/products" className="navbar-link" onClick={()=>setMenuIcon(false)}>Products</NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="navbar-link" onClick={()=>setMenuIcon(false)}>Contact</NavLink>
          </li>

          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
            <FiShoppingCart className='cart-trolley'/>
            <span className='cart-total--item'>10</span>

            </NavLink>
          </li>



        </ul>
        <div className='mobile-navbar-btn'>
          <CgMenu name="menu-outline" className='mobile-nav-icon'
          onClick={()=>setMenuIcon(true)}
          />
          <CgClose name="close-outline" className='mobile-nav-icon close-outline'
          onClick={()=>setMenuIcon(false)}
          />
        </div>

      </div>
    </NavWrapper>
  );
};

export default Nav