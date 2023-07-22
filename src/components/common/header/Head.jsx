import React from "react"
import Animation from "./Animation"
import quizBanner from './quizBanner.webp'
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <Animation />
          <div className='logo'>
            <h1>MINDSPARK</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
        <Link to="/quiz"> <div className="quizBanner">
          <img src={quizBanner} alt="" />
        </div> </Link>
      </section>
    </>
  )
}

export default Head
