import React from 'react'; 
import {Link} from 'react-scroll';
import './Hero.css';
import hero from '../../Photos/Styles/image-1.jpg';



const Hero = () => {
  return (
    <>

    <section>
        <div className="hero">


            <div className="left">
                <div className="left-side">
                    <h4>Who am i ?</h4>
                    <h1 className='left-h1'>Simran Banwait</h1>
                    <p>i am a Web Devloper ,  Computer Science Engineering Student and 
                        almost a Graduate , A Youtuber and just for fun, a Music producer, 
                        in terms of web development my main focus is in frontend technologies 
                        and designing amazing amazing UIs .</p>
                    <Link className='hire' to={"to-contact"} offset={-70} smooth={false} duration={1000}>HIRE ME</Link>
                </div>
            </div>


            <div className="right">
                <div className="right-side">
                    <img src={hero} alt="hero" />
                </div>
            </div>


        </div>
    </section>


    </>
  )
}

export default Hero;