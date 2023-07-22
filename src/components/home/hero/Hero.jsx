import React from "react"
import "./Hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <div className="heading-h1">
              <h1>WELCOME TO MINDSPARK ! </h1>
            </div>
            <br /><br />
            <div className="heading-h2">
              <h2>We believe in the transformative power of education</h2>
            </div>
            <p className="para">At Mind Spark, we are on a mission to ignite a lifelong love for learning and empower students to unlock their full potential. Our platform offers a diverse range of interactive courses designed to cater to every learner's unique needs.</p>
            <div className='button'>
            <Link to="/quiz">
              <button className='primary-btn'>
                PARTICIPATE IN QUIZ <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </Link>
            <Link to="/delit">
              <button className='secondary-btn'>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
      
    </>
  )
}

export default Hero
