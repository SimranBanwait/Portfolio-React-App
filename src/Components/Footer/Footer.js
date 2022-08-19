import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import { Link as Take} from 'react-scroll/modules'; 
import { logoTop } from '../Navbar/Navbar';


import arrow from '../../Photos/ICONS/arrow.png';
import location from '../../Photos/ICONS/location.png';
import mail from '../../Photos/ICONS/mail.png';
import phone from '../../Photos/ICONS/phone.png';
import linkedin from '../../Photos/ICONS/linkedin.png'
import github from '../../Photos/ICONS/github-2.png';
import twitter from '../../Photos/ICONS/twitter.png';
import insta from '../../Photos/ICONS/instagram.png';
import YT from '../../Photos/ICONS/youtube.png';





const Footer = () => {
  return (
    <>
        <footer id='footer'>
          <div className="outer-box">
            

            {/* information box with links and other stuff */}
            <div className="info-box">
              <div className="footAbout">
                <h3>About</h3>
                <p>This website is built with pure multiple extra adons , packages like react framer motion , React material UI .</p>
              </div>

              <div className="links">
                <h3>Links</h3>
                <ul>
                  <li>
                    <img className='arrow' src={arrow} alt="#" />
                    <Link to='contact' className='footer-link' onClick={logoTop}>Contact</Link>
                  </li>
                  <li>
                    <img className='arrow' src={arrow} alt="#" />
                    <Link to='about' className='footer-link' onClick={logoTop}>About</Link>
                  </li>
                  <li>
                    <img className='arrow' src={arrow} alt="#" />
                    <Take to={"skills"} className='footer-link' offset={-70} smooth={false} duration={1000}>Skills</Take>
                  </li>
                  <li>
                    <img className='arrow' src={arrow} alt="#" />
                    <Take to="vision" className='footer-link' offset={-70} smooth={false} duration={1000}>Download CV</Take>
                  </li>
                </ul>
              </div>

              <div className="projects">
                <h3>Projects</h3>
                <ul>
                  <li>
                    <img className='arrow' src={arrow} alt="#" />
                    <Link to='weather' className='footer-link' onClick={logoTop}>Accu. Weather</Link>
                  </li>
                  <li>
                    <img className='arrow' src={arrow} alt="#" />
                    <Link to='news' className='footer-link' onClick={logoTop}>News Daily</Link>
                  </li>
                  <li>
                    <img className='arrow' src={arrow} alt="#" />
                    <a className='footer-link' 
                    href="hhttps://simranbanwait.github.io/WordCounter.github.io/"
                    target="_blank"
                    rel="noreferrer">Word Counter</a>
                  </li>
                  <li>
                    <img className='arrow' src={arrow} alt="#" />
                    <a className='footer-link'
                    href="https://simranbanwait.github.io/Background_Generator.github.io/"
                    target="_blank"
                    rel="noreferrer">Gradient maker</a>
                  </li>
                </ul>
              </div>

              <div className="contacts">
                <h3>Contacts</h3>
                <ul>
                  <li><img className='arrow' src={location} alt="#" />Ropar, V.P.O Bela</li>
                  <li><img className='arrow' src={mail} alt="#" />simranbanwait02@gmail.com</li>
                  <li><img className='arrow' src={phone} alt="#" />Phone No. :+91 86999-38885</li>
                </ul>
              </div>
            </div>




            {/* social media icons box  */}
            <div className="socials-box">
              <ul>

                <li>
                  <a href="https://www.linkedin.com/in/simranjeet-singh-171200220/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="#" />
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/simran_banwait_/?hl=en" target="_blank" rel="noreferrer">
                    <img src={insta} alt="#" />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/SimranBanwait" target="_blank" rel="noreferrer">
                    <img src={github} alt="#" />
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/simrxn_banwait" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="#" />
                  </a>
                </li>

                <li>
                <a href="https://www.youtube.com/channel/UCo86L3aooGUgHXCIVxDvWwQ" target="_blank" rel="noreferrer">
                    <img src={YT} alt="#" />
                  </a>
                </li>



              </ul>
            </div>


            {/* last line of the site */}
            <div className="last-box">
              <p>Copyright ©2022 All rights reserved | This template is made with ❤ in by Simran Banwait</p>
            </div>

          </div>
        </footer>
    </>
  )
}

export default Footer;