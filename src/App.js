import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import FunQuiz from "./components/quiz/FunQuiz"
import HomePage from "./components/learning-center/HomePage"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/courses' Component={CourseHome} />
          <Route exact path='/team' Component={Team} />
          <Route exact path='/pricing' Component={Pricing} />
          <Route exact path='/blog' Component={Blog} />
          <Route exact path='/contact' Component={Contact} />
           <Route exact path='/quiz' Component={FunQuiz} />
          <Route exact path='/learning-center' Component={HomePage} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App