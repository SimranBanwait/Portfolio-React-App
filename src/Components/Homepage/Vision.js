import React from 'react';
import './Vision.css';

import hero2 from '../../Photos/Styles/image-2.jpg';

const Vision = () => {
  return (
    <>
        <section>
              <div className="vision" id="vision">

                  <div className="vision-left">
                    <img  src={hero2} alt="#" />
                  </div>

                  <div className="vision-right">
                      <div className="vision-right-side">
                          <h4>But Why Me ?</h4>
                          <h2>I Have a Vision</h2>
                          <p>When i started my journey in web development, i was amazed by 
                            the amout of advancement we have achieved comparing it to the time since 90s, 
                            we had web which only had static pages then we had 
                            is web 3.0. My main goal is to be a web 3.0 Developer , 1 step futher in this
                            web 2.0 which allowed us to do things on it , like CRUD operations. And now the 
                            future is Web 3.0 where each device or each node have a blockchain node like behaviour. 
                            Technologies like Next.js and languages like rust are some of the basic
                            tools that are required to build web 3 Apps or in other words, they are called DAAPS
                            (Decentralized appplications). We all know that the future is full of web 3,
                            so i want to be an early adopter of this technology. I am mostly a self learner
                            most of the skills i have gained are from online resources specially <span> Youtube</span>. 
                            This ability of self 
                            learning makes anyone a great competitor. 
                          </p>
                          <a 
                          className='download-cv' 
                          href="https://drive.google.com/file/d/1KtI1EoN7qn6gGEAqcWB61tk6U7p0xklh/view?usp=sharing"
                          target="_blank"  
                          rel="noreferrer"
                          offset={-70} 
                          smooth={false} 
                          duration={1000}>DOWNLOAD CV</a>
                      </div>
                  </div>

              </div>

        </section>
    </>
  )
}

export default Vision;