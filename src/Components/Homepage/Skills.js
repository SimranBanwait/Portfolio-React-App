import React from 'react';
import './Skills.css';
import { motion, AnimatePresence } from "framer-motion";


import image3 from '../../Photos/Styles/image-3.jpg'
//technologies-icons
import html5 from '../../Photos/ICONS/html.png';
import css3 from '../../Photos/ICONS/css.png';
import reactJs from '../../Photos/ICONS/react.png';
import photoShop from '../../Photos/ICONS/photoshop.png';
import js from '../../Photos/ICONS/js.png';
import nodeJs from '../../Photos/ICONS/nodejs.png';
import sql from '../../Photos/ICONS/sql.png';
import linux from '../../Photos/ICONS/linux.png';



const Skills = () => {



      return (
            <>
            <section className='skills' id='skills'>

                  <div className="layout">

                        <div className="skill-left">
                              <div className="skill-label">
                                    <h1>Skill Set</h1>
                                    <p>i'm a self learner, So most of the skill thats i have gained are mainly from online resources like
                                    "W3 schools" , "MDN" , Most importanly Youtube Videos and some Udemy courses as well.</p>
                              </div>
                        </div>

                        <div className="skill-right">
                              <img src={image3} alt="" />
                        </div>

                        <div className="skill-left-bottom">
                              <AnimatePresence>
                              <div className="technologies">
                                    <motion.div
                                          whileHover={{ scale: 1.1, transition: .2 }}
                                          className="skill ">
                                          <img src={reactJs} alt="react" />
                                    </motion.div>

                                    <motion.div
                                          whileHover={{ scale: 1.04, transition: .2 }}
                                          className="skill ">
                                          <img src={html5} alt="html" />
                                    </motion.div>

                                    <motion.div
                                          whileHover={{ scale: 1.04, transition: .2 }}
                                          className="skill ">
                                          <img src={js} alt="=javascript" />
                                    </motion.div>

                                    <motion.div
                                          whileHover={{ scale: 1.04, transition: .2 }}
                                          className="skill ">
                                          <img src={css3} alt="css" />
                                    </motion.div>

                                    <motion.div
                                          whileHover={{ scale: 1.04, transition: .2 }}
                                          className="skill ">
                                          <img src={photoShop} alt="photoshop" />
                                    </motion.div>

                                    <motion.div
                                          whileHover={{ scale: 1.04, transition: .2 }}
                                          className="skill ">
                                          <img src={nodeJs} alt="photoshop" />
                                    </motion.div>

                                    <motion.div
                                          whileHover={{ scale: 1.04, transition: .2 }}
                                          className="skill ">
                                          <img src={sql} alt="sql" />
                                    </motion.div>

                                    <motion.div
                                          whileHover={{ scale: 1.04, transition: .2 }}
                                          className="skill ">
                                          <img src={linux} alt="linux" />
                                    </motion.div>
                              </div>
                              </AnimatePresence>
                        </div>
                  </div>


            </section>
            </>
      )
}

export default Skills;