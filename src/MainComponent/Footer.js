
import styled from 'styled-components'
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa';
function Footer() {
  return (
    <Wrapper>
        <section className='contact-short'>
            <div className='grid grid-two-column'>
                <div>
                    <h3>Ready to get started</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                <Button>
                    <NavLink to="./Contact">Get started</NavLink>
                </Button>


                </div>
                
        
                </div>
        </section>

        <footer>
            <div className='container grid grid-four-column'>
                <div className='footer-about'>
                    <h3>My store</h3>
                    <p>lorem3 ispsu kljagk slf ienf  jdslk gkd</p>
                </div>
                <div className='footer-subscribe'>
                    <h3>subscribe to get important updates</h3>
                    <form action="#" value="form" id="form">
                        <input type='email' placeholder='your email'/>
                        <input type='submit' value="subscribe"/>
                    </form>
 
                </div>
                <div className='footer-social'>
                     <h3>follow us</h3>
                     <div className='footer-social--icons'>
                        <div>
                            <a href='#'alt="unable">

                            <FaDiscord className='icons'/>
                            </a>
                        </div>

                        <div>
                            <a href='#' alt="unable">

                            <FaInstagram className='icons'/>
                            </a>
                        </div>


                        <div>
                            <a href='#' alt="unable">

                            <FaYoutube className='icons'/>
                            </a>
                        </div>
                        
                     </div>
                </div>
                <div className='footer-contact'>
                    <h3>Call us</h3>
                    {/* <a href='tel:443345'>+91 1234567891</a> */}
                    <h3>+91 1234567891</h3>
                </div>
            </div>


            <div className='footer-botton--section'>
                <hr/>
                <div className='container grid grid-two-column'>
                    <p>@{new Date().getFullYear()} Mystore.All rights reserved</p>
                </div>
                <div>
                    <p>PRIVACY POLICY</p>
                    <p>TERM & CONDITIONS</p>
                </div>
            </div>
        </footer>


    </Wrapper>
  )
}

const Wrapper = styled.section`
    .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer