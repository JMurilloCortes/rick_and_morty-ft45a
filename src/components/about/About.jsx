import styles from "./about.module.css"
import React from 'react'
import imagen from '../../images/jerry.jpg';
import icoLinkedin from '../../images/linkedin.png';

function About(props) {
  return (
    <div className={styles.container}>
      <img src={imagen} alt="Jerry Murillo" />
      <h1>Jerry Murillo</h1>
      <h2>FullStack Web Development</h2>
      <h2>Soy Henry - FT-45a</h2>
      <h2>
        {/* <img src={icoLinkedin} alt="" /> */}
        <a href="https://github.com/JMurilloCortes" target="_blank">
          Linkedin
        </a>
      </h2>
    </div>
  )
}

export default About