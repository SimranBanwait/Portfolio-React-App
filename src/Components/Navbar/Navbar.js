// import React  from 'react';
import React, { useState} from "react";
import './Navbar.css';
import {Link} from "react-router-dom";
import { Link as Take } from 'react-scroll/modules';
import { motion } from "framer-motion";
import { animateScroll } from 'react-scroll/modules'; 


import logo from '../../Photos/ICONS/LOGO.png'; //the logo image
//social media icons
import twitter from '../../Photos/ICONS/twitter.png';
import linkedin from '../../Photos/ICONS/linkedin.png';
import github from '../../Photos/ICONS/github-2.png';
//projects icons
import weather from '../../Photos/ICONS/weather.png';
import news from '../../Photos/ICONS/news.png';
import imageGallery from '../../Photos/ICONS/camera.png';
import gradient from '../../Photos/ICONS/image.png';
import word from '../../Photos/ICONS/word.png';




export const logoTop=()=>{
    animateScroll.scrollToTop({
        duration: 50,
        smooth: true,
    })
}


const Navbar = () => {

    const [socialsDropdown, setSocialsDropdown] = useState(false);
    const [projectsDropdown, setProjectsDropdown] = useState(false);


    const came=()=>{
        setSocialsDropdown(true);
    }
    const gone=()=>{
        setSocialsDropdown(false);
    }


    const aageya = () => {
        setProjectsDropdown(true);
    }
    const chalageya = () => {
        setProjectsDropdown(false);
    }


    return (
        <>
            <header>
                <nav className='navbar'>

                    {/* logo or left side */}
                    <div className="nav-left" onClick={logoTop}>
                        <Link to="/" className='navbar-element'><img className='logo' src={logo} alt="logo"/></Link>
                    </div>

                    {/* nav wali side for nav- elements*/}
                    <div className="nav-right">
                        <ul className='navbar-elements'>
                            <li ><Link to="/" className='navbar-element' onClick={logoTop}>HOME</Link></li>
                            <li className='navbar-element ' onMouseEnter={aageya} onMouseLeave={chalageya}>PROJECTS</li>                        
                            <li ><Link to="/about" className='navbar-element' onClick={logoTop}>ABOUT</Link></li>                        
                            <li onMouseEnter={came} onMouseLeave={gone} ><Take className='navbar-element special' to={'footer'}>SOCIALS</Take></li>
                            <li ><Link to="/contact" className='navbar-element' onClick={logoTop}>CONTACT</Link></li>                        
                            
                            

                            {/* <AnimatePresence> */}
                            {
                            projectsDropdown &&

                            <motion.div 
                            initial={{  y:"-5%" , opacity:0 }} 
                            animate={{  y:1 ,opacity:1}} 
                            transition={{ type: "spring", duration :.5 ,delay:.2 ,ease:"easeOut"}}
                            exit={{ y: "-5%", opacity: 0}}
                            className="projects-dropdown" 
                            onMouseEnter={aageya} 
                            onMouseLeave={chalageya} >
                                <ul className='projects-all'>

                                    <li className='project-single'>
                                        <Link to="/weather" className="project-link" >
                                            <img src={weather} alt="weather-icon" className="project-icon" />
                                            <p className="project-text">Accu. Weather</p>
                                        </Link>
                                    </li>

                                    <li className='project-single'>
                                        <Link to="/news" className="project-link" >
                                            <img src={news} alt="news-icon" className="project-icon" />
                                            <p className="project-text">News Daily</p>
                                        </Link>
                                    </li>

                                    <li className='project-single'>
                                        <a href="https://simranbanwait.github.io/ImageGallery.github.io/" target="_blank" rel="noreferrer" className="project-link" >
                                            <img src={imageGallery} alt="gallery-icon" className="project-icon" />
                                            <p className="project-text">Image gallery</p>
                                        </a>
                                    </li>

                                    <li className='project-single'>
                                        <a href="https://simranbanwait.github.io/Background_Generator.github.io/" target="_blank" rel="noreferrer"  className="project-link" >
                                            <img src={gradient} alt="gradient-icon" className="project-icon" />
                                            <p className="project-text">Gradient Generator</p>
                                        </a>
                                    </li>

                                    <li className='project-single'>
                                        <a href="https://simranbanwait.github.io/WordCounter.github.io/" target="_blank" rel="noreferrer" className="project-link">
                                            <img src={word} alt="word-icon" className="project-icon" />
                                            <p className="project-text">Word Counter</p>
                                        </a>
                                    </li>

                                </ul>
                            </motion.div>
                            }
                            {/* </AnimatePresence> */}








                            
                            {
                            socialsDropdown &&
                            <motion.div  
                            initial={{scale:0}} 
                            animate={{scale:1}}      
                            transition={{ type: "spring", duration: .2, delay: .2 }}   
                            className="socials-dropdown" 
                            onMouseEnter={came} 
                            onMouseLeave={gone} >
                                <ul className='media-icons'>

                                    <li className='media-icon'>
                                        <a href="https://www.linkedin.com/in/simranjeet-singh-171200220/" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="media-link">
                                            <img src={linkedin} className="media-image" alt="linkedin"/>
                                            <p className="media-text">/Simran-Banwait</p>
                                        </a>
                                    </li>
                                            
                                    <li className='media-icon'>
                                        <a href="https://github.com/SimranBanwait" 
                                        target="_blank"
                                        rel="noreferrer" 
                                        className="media-link">
                                                <img src={github} className="media-image" alt="media"/>
                                            <p className="media-text">/SimranBanwait</p>
                                        </a>
                                    </li>

                                    <li className='media-icon'>
                                        <a href="https://twitter.com/simrxn_banwait" 
                                        target="_blank"
                                        rel="noreferrer"
                                        className="media-link">
                                            <img src={twitter} className="media-image" alt="twitter"/>
                                            <p className="media-text">@simrxn_banwait</p>
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>
                            }






                        </ul>
                    </div>

                </nav>
            </header>
        </>

    )
}




export default Navbar;