import { createGlobalStyle } from "styled-components"
import React from 'react'


export const GlobalStyle= createGlobalStyle` 
.container{
max-width:120rem;
margin:0 auto;
}
.grid{
display:grid;
gap:9rem;
}
 .grid-two-column{
 grid-template-columns:repeat(2,1fr);
 }
`;