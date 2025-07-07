import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
import {ThemeProvider} from 'styled-components'
function Header() {
  return <MainHeader>
    
    <NavLink to="/">
    <img src="./images/logoimagecom.jpg" alt="failed to fetch image" className='logo'></img>

    </NavLink>
    
    <Nav/>
    </MainHeader>
  
}

const MainHeader = styled.header`
margin:0;
padding: 0 20px;
height:8rem;

background-color: ${({theme})=>theme.colors.bg};

display: flex;
justify-content:space-between;
align-items:center;
position:relative;
.logo{
height:5rem;
}
`;
export default Header