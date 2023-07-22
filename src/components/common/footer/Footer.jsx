import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className="footer">
      
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Share your email to receive our newsletter directly in your inbox. Be the first to know about new courses, special promotions, and educational insights tailored just for you. Join our community today !</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>MINDSPARK</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>We believe in the transformative power of education.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <Link to="/about"><li>About Us</li></Link>
              <li>Services</li>
              <Link to="/courses"><li>Courses</li></Link>
              <Link to="/blog"><li>Blog</li></Link>              
              <Link to="/contact"><li>Contact Us</li></Link>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
            <Link to="/contact"><li>Contact Us</li></Link>
            <Link to="/pricing"><li>Pricing</li></Link>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val, index) => (
              <div className='items flexSB' key={index}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Nexus Complex 4, near Santram Mandir, Nadiad, Gujarat, India
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 92355 73898
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                rbk4112001@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Footer
