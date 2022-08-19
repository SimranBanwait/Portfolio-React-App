import React from 'react';
import './About.css';


const About = () => {
  return (
    <>
      <section className='about-section'>

        <div className="about-label">
          <h1>About Me</h1>
          <p>I am a 24 year old fresh graduate looking for opportunities learn more and to grow my carrier<br/> 
          as a Web Developer in the Industry , not enogh detail..? here are some more  about me</p>        
        </div>

        <div className="about-content">

          {/* education section */}
          <div className="education">
            <div className="education-heading">
              <h1>Education :</h1>
            </div>

            <div className="graduation">
              <h4>B.Tech in Computer Science Engineering (CSE) : 8.0 CGPA</h4>
              <p>From : Rayat institute of Engineering & Information Technology (Rail Majjra)</p>
              <p>Education Board : I.K Gujral Punjab Technical University (PTU)</p>
            </div>

            <div className="graduation">
              <h4>PolyTechnic Diploma in Computer Science (CSE) : 73.8%</h4>
              <p>From : Rayat institute of Engineering & Information Technology (Rail Majjra)</p>
              <p>Education Board: Punjab State Board of Technical Education & Industrial Training (PSBTE)</p>
            </div>

            <div className="graduation">
              <h4>Higher Secondary 12th (Non-Medical) : 66%</h4>
              <p>From : Rayat International School (Rail Majra)</p>
              <p>Education Board : Central Board Of Secondary Education (CBSE)</p>
            </div>

          </div>



          {/* LANGUAGES SECTION */}
          <div className="languages">
            <div className="languages-heading">
              <h1>Languages :</h1>
            </div>
            <div className="language-types">
              <div className="language-1">
                <h4>English</h4>
                <p>Native / Bilingual</p>
              </div>
              <div className="language-1">
                <h4>Punjabi</h4>
                <p>Native / Full Proficiency</p>
              </div>
              <div className="language-1">
                <h4>Hindi</h4>
                <p>Native / Full Proficiency</p>
              </div>
            </div>
          </div>


          {/* HOBBIES SECTION */}
          <div className="interests">
            <div className="interests-heading">
              <h1>Interests :</h1>
            </div>
            <div className="interests-types">
              <div className="interest">
                <h4>Music production</h4>
                <p>Using Digital audio Workstation</p>
              </div>
              <div className="interest">
                <h4>Video editing</h4>
                <p>Mostly for Youtube Videos</p>
              </div>
              <div className="interest">
                <h4>Space exploration</h4>
                <p>Studying About Celestial Bodies</p>
              </div>
            </div>
          </div>
        </div>


        <div className="last-button">
          
        </div>

      </section>
      
    </>
  )
}

export default About;