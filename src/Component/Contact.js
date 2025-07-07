import React from 'react'

import styled from 'styled-components'
import { Button } from '../MainComponent/Button';

function Contact() {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contect page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7335.517993150862!2d75.76913861913452!3d23.178994579442524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963744655651d1b%3A0x73dd95a0a70ffd1d!2sSakhipura%2C%20Ujjain%2C%20Madhya%20Pradesh%20456001!5e0!3m2!1sen!2sin!4v1751692950898!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className='container'>
        <div className='contact-form'>
          <form action="https://formspree.io/f/manjzqyy" method="post" className='contact-inputs'>
            <input type='text' placeholder='username' name="username" required autoComplete='off'/>

            <input type='email' name='Email'placeholder='email' autoComplete='off' required/>

            <textarea name="message" cols="30" rows="10" required autoComplete='off' placeholder='enter your message'></textarea>

           {/* <Button> */}
            <input type='submit' value ="send" />
            {/* </Button>  */}


          </form>
        </div>
        
      </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`

padding: 9rem 0 5rem 0;
text-align:center;

.container{
margin-top:6rem;

.contact-form{
max-width:50rem;
margin:auto;

.contact-inputs{
display:flex;
flex-direction:column;
gap:3rem;

input[type="submit"]{
cursor:pointer;
transition:all 0.2s;


&:hover{
background-color:${({theme})=>theme.colors.white};
border:1px solid ${({theme})=>theme.colors.btn};
color:${({theme})=> theme.colors.btn}
transform:scale(0.9);

}
}
}}}
`;
export default Contact