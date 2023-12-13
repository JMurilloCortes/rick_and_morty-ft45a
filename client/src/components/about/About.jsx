import styles from "./about.module.css"
import React from 'react'
import imagen from '../../images/jerry.jpg';
// import icoLinkedin from '../../images/linkedin.png';

function About(props) {
  return (
    <div className={styles.container}>
    <div className={styles.container2}>
      <div>
      <img src={imagen} alt="Jerry Murillo" />
      </div>
      <div>
      <h1>Jerry Murillo</h1>
      </div>
      <div>
      <h2>FullStack Web Development</h2>
      </div>
      <div>
      <h2>Soy Henry - FT-45a</h2>
      </div>
      <div>
      <h2>
        {/* <img src={icoLinkedin} alt="" /> */}
        <a href="https://github.com/JMurilloCortes" target="_blank">
          GitHub
        </a>
      </h2>
      </div>
    </div>
    </div>
  )
}

export default About