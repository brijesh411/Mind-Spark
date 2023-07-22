import React from "react"
import "./about.css"
import AboutCard from "./AboutCard"

const About = () => {
  return (
    <>
    <div className="about-background">
      <div className="about-content">
        <br />
      <div className = "about-head-container">
        <h1>Welcome to MindSpark - Unleashing the Power of Learning</h1>
      </div>

      <div className = "about-para-container">
          <p>At MindSpark, we believe in the transformative power of education. Our mission is to empower learners of all ages to discover their potential, embrace their curiosity, and achieve their dreams through innovative and personalized learning experiences. With a passionate team of educators and cutting-edge technology, we strive to create a positive impact on the world of education.</p>
        </div>
      </div>
    
    <div className="about-content">
      <div className = "about-head-container">
        <h1>Our Journey: A Story of Inspiration</h1>
      </div>

      <div className = "about-para-container">
        <p>Founded in 2010 by a group of dedicated educators and visionaries, MindSpark began as a humble initiative to address the challenges faced by students in traditional learning environments. Over the years, our journey has been filled with dedication, hard work, and a commitment to reimagining education for the better.</p>
      </div>
    </div>
    
    <div className="about-content">
      <div className = "about-head-container">
        <h1>Pioneering a New Approach to Learning</h1>
      </div>

      <div className = "about-para-container">
        <p>At MindSpark, we believe that every learner is unique, and their educational journey should be tailored to their specific needs and interests. We have pioneered a new approach to learning that blends technology and human expertise to create personalized learning pathways for each student.</p>
      </div>
    </div>

    <div className="about-content">
      <div className = "about-head-container">
        <h1>Our Values: Empowerment, Innovation, and Integrity</h1>
      </div>

      {/* <div className="about-content"> */}
        <div className = "about-head3-container">
          <h3>Our core values are the foundation of everything we do:</h3>
        </div>
      {/* </div> */}

      <div className = "about-para-container">
        <p>Empowerment: We empower learners to take charge of their education, fostering a love for learning that goes beyond textbooks.</p>
        <p>Innovation: We embrace innovation to revolutionize education and stay at the forefront of modern teaching methodologies.</p>
        <p>Integrity: We uphold the highest standards of integrity, transparency, and ethics in our interactions with learners, educators, and partners.</p>
      </div>
    </div>
  </div>

      <div className="about-image">
        <img className="image" src="https://cdn.kastatic.org/images/about/product_images/volume5.gif" alt=""/>
        <img className="image" src="https://cdn.kastatic.org/images/about/product_images/about_withgifs-07.jpg" alt=""/>
        <img className="image" src="https://cdn.kastatic.org/images/about/product_images/about_withgifs-12.jpg" alt=""/>
        <img className="image" src="https://cdn.kastatic.org/images/about/product_images/volume5.gif" alt=""/>
        <img className="image" src="https://cdn.kastatic.org/images/about/product_images/about_withgifs-07.jpg" alt=""/>
        <img className="image" src="https://cdn.kastatic.org/images/about/product_images/about_withgifs-12.jpg" alt=""/>
        <img className="image" src="https://cdn.kastatic.org/images/about/product_images/volume5.gif" alt=""/>
        <img className="image" src="https://cdn.kastatic.org/images/about/product_images/about_withgifs-07.jpg" alt=""/> 
      </div>

      <AboutCard />
    </>
  )
}

export default About
